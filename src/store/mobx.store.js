import { action, observable, makeObservable, observe, runInAction } from "mobx"
import { fetchHandler, timeoutHandler } from '../utils'
import { isEmpty, debug, log, onerror } from 'x-utils-es'
import { api } from './api'
Object.freeze(api) // no mods please!

export class MobxStore {
    state = "pending" // "pending", "ready", "error",
    exchanges = []
    productDetail={}
    pageRoute = 1
    // caching same requests
    cachedProducts={}
    cachedExchangePaged={}

    apiBase = api.base
    pagedPerPage = 10

    constructor() {
        makeObservable(this, {
            state: observable,
            pageRoute: observable,
            productDetail: observable
            // exchanges: observable
        })

    }

    /**
     *
     * Fetch is controlled via withStore.hoc component before the page loads
     * Caching results on subsequent calls to same route
     * @param {*} params
     * @returns
     * @memberof MobxStore
     */
    fetch_exchanges(params) {
        if (!params.page) params.page = 1
        
        if (this.cachedExchangePaged[params.page]) {

            runInAction(() => {
                log('[exchanges][paged][cached]')
                this.exchanges = this.cachedExchangePaged[params.page]
                this.pageRoute = params.page
            })   

            return Promise.resolve(this.cachedExchangePaged[params.page])
        }

        this.state = 'pending'
        this.exchanges = []
        debug('[fetch]', api.exchanges(params))

        return fetch(api.exchanges(params), {
            method: 'GET',
            //  mode: "no-cors",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            signal: timeoutHandler(5000).signal
        }).then(fetchHandler)
            .then((response) => {

                runInAction(() => {
                    this.exchanges = response || []

                    this.exchanges.sort((a, b) => b.trust_score_rank - a.trust_score_rank)
                    this.state = "ready"
                    this.cachedExchangePaged[params.page] = response
                    this.pageRoute = params.page
                    log('[exchanges]', this.exchanges)
                })

            }).catch(err => {

                runInAction(() => {
                    this.state = "error"
                })
              
                if (err instanceof DOMException) {
                    onerror('[fetch_exchanges]', err.toString())
                     
                } else {
                    onerror('[fetch_exchanges]', err)
                }
                 
            })
    }

    /**
     * Fetch is controlled via withProduct.hoc component before the page loads
     * Caching results on subsequent calls to same route
     * @param {*} id
     * @returns
     * @memberof MobxStore
     */
    fetch_exchangeProduct(id) {

        if (this.cachedProducts[id]) {
            runInAction(() => {
                this.productDetail = this.cachedProducts[id]
                log('[productDetail][cached]')
            })       
            return Promise.resolve(this.cachedProducts[id])
        }

        this.state = 'pending'
        this.productDetail = {}
        debug('[fetch]', api.exchanges())

        return fetch(api.exchangesProduct(id), {
            method: 'GET',
            //  mode: "no-cors",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            signal: timeoutHandler(5000).signal
        }).then(fetchHandler)
            .then((response) => {

                runInAction(() => {
                    this.productDetail = response || {}                 
                    this.state = "ready"
                    this.cachedProducts[id] = response
                    log('[productDetail]', this.productDetail)
                })

            }).catch(err => {

                runInAction(() => {
                    this.state = "error"
                })
                if (err instanceof DOMException) {
                    onerror('[fetch_exchanges]', err.toString())
                } else {
                    onerror('[fetch_exchangeProduct]', err)
                }
            })
    }
}
