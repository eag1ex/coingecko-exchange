import { action, observable, makeObservable, observe, runInAction } from "mobx"
import { fetchHandler } from '../utils'
import { isEmpty, debug, log, onerror } from 'x-utils-es'
import { api } from './api'
Object.freeze(api) // no mods please!

export class MobxStore {
    state = "pending" // "pending", "ready", "error",
    exchanges = []
    productDetail={}
    cachedProducts={}
    apiBase = api.base
    constructor() {
        makeObservable(this, {
            state: observable,
            productDetail:observable,
            // exchanges: observable
        })

        runInAction(() => {
            this.fetch_exchanges(10)
        })

    }

    fetch_exchanges(paged) {

        this.state = 'pending'
        this.exchanges = []

        debug('[fetch]', api.exchanges())

        return fetch(api.exchanges((paged ? { per_page: paged } : {})), {
            method: 'GET', headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).then(fetchHandler)
            .then((response) => {

                runInAction(() => {
                    this.exchanges = response || []
                    this.exchanges.sort((a, b) => b.trust_score_rank - a.trust_score_rank)
                    this.state = "ready"
                    log('[exchanges]', this.exchanges)
                })

            }).catch(err => {

                runInAction(() => {
                    this.state = "error"
                })

                onerror('[fetch_exchanges]', err)
            })
    }

    fetch_exchangeProduct(id) {

        if(this.cachedProducts[id]){
            this.productDetail = this.cachedProducts[id]
            log('[productDetail][cached]')
            return Promise.resolve(this.cachedProducts[id])
        }

        this.state = 'pending'
        this.productDetail = {}
        debug('[fetch]', api.exchanges())

        return fetch(api.exchangesProduct(id), {
            method: 'GET', headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).then(fetchHandler)
            .then((response) => {

                runInAction(() => {
                    this.productDetail = response || {}
                    this.cachedProducts[id] = response
                    this.state = "ready"
                    log('[productDetail]', this.productDetail)
                })

            }).catch(err => {

                runInAction(() => {
                    this.state = "error"
                })
                onerror('[fetch_exchangeProduct]', err)
            })
    }


}
