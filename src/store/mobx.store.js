import { observable, makeObservable, runInAction } from "mobx"
import { fetchHandler, timeoutHandler } from '../utils'
import { debug, log, onerror } from 'x-utils-es'
import { api } from './api'
Object.freeze(api) // no mods please!
export class MobxStore {
    state = "pending" // "pending", "ready", "error"
    exchanges = []
    productDetail={}
    // caching same requests
    cachedProduct={}
    cachedExchangePaged={}
    apiBase = api.base
    pagedPerPage = 10

    constructor() {
        makeObservable(this, {
            state: observable,
            productDetail: observable,
            exchanges: observable
        })

    }

    /**
     *
     * Fetch is controlled via withStore.hoc component before the page loads
     * Caching results on subsequent calls to same route
     * @param {*} params `{per_page,page}`
     * @param {*} timeout:number to exit on long wait
     * @returns
     * @memberof MobxStore
     */
    fetch_exchanges(params, timeout = 5000) {
        if (!params.page) params.page = 1
        
        this.state = 'pending'  
 
        if (isNaN(Number(params.page))) { 

            return Promise.reject('fetch_exchanges wrong page provided').catch(err => {
                runInAction(() => {
                    this.state = "error"
                })
            })
        }
        
        if (this.cachedExchangePaged[params.page]) {

            runInAction(() => {
                log('[exchanges][paged][cached]')
                this.exchanges = this.cachedExchangePaged[params.page]
                this.state = 'ready'
            })   

            return Promise.resolve(this.cachedExchangePaged[params.page])
        }
    
        this.exchanges = []
        debug('[fetch]', api.exchanges(params))

        return fetch(api.exchanges(params), {
            method: 'GET',
            //  mode: "no-cors",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            signal: timeoutHandler(timeout).signal
        }).then(fetchHandler)
            .then((response) => {
                runInAction(() => {
                    this.exchanges = response || []

                    this.exchanges.sort((a, b) => b.trust_score_rank - a.trust_score_rank)               
                    this.cachedExchangePaged[params.page] = response
                    this.state = "ready"
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
     * @param {*} timeout:number to exit on long wait
     * @memberof MobxStore
     */
    fetch_exchangeProduct(id, timeout = 5000) {
        this.state = 'pending'

        if (this.cachedProduct[id]) {
            runInAction(() => {
                this.productDetail = this.cachedProduct[id]
                this.state = 'ready'
                log('[productDetail][cached]')
            })       
            return Promise.resolve(this.cachedProduct[id])
        }
      
        this.productDetail = {}
        debug('[fetch]', api.exchangesProduct(id))

        return fetch(api.exchangesProduct(id), {
            method: 'GET',
            //  mode: "no-cors",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            signal: timeoutHandler(timeout).signal
        }).then(fetchHandler)
            .then((response) => {

                runInAction(() => {
                    this.productDetail = response || {}                               
                    this.cachedProduct[id] = response
                    this.state = "ready"
                    log('[productDetail]', this.productDetail)
                })

            }).catch(err => {

                runInAction(() => {
                    this.state = "error"
                })

                if (err instanceof DOMException) {
                    onerror('[fetch_exchangeProduct]', err.toString())
                } else {
                    onerror('[fetch_exchangeProduct]', err)
                }
            })
    }
}
