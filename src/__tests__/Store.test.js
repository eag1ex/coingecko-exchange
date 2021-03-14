/* eslint-disable no-undef */
import { loggerSetting, delay } from 'x-utils-es'
// disable any loggind in testing
loggerSetting('log', 'off')
loggerSetting('debug', 'off')
loggerSetting('error', 'off')

import { cleanup } from '@testing-library/react'
import { MobxStore } from '../store'

// NOTE the tests dependant on the api.coingecko API to fetch results and be evaluated on the page

describe('Testing MobxStore', () => {
    let store = new MobxStore()

    afterEach(() => {
        cleanup()
    })

    it('should return 10 results from api.coingecko/exchanges/1', async (done) => {

        let defer = store.fetch_exchanges({ per_page: 10, page: 1 })

        expect(store.state).toEqual('pending')
        await defer
        expect(store.state).toEqual('ready')
        expect(store.exchanges).toHaveLength(10)
        done()
    })

    it('should return 10 cached results from api.coingecko/exchanges/1', async (done) => {

        let defer = store.fetch_exchanges({ per_page: 10, page: 1 }) 
        await defer
        expect(store.state).toEqual('ready')
        expect(store.cachedExchangePaged[1]).toHaveLength(10)
        done()
    })

    it('should return 1 result from api.coingecko/exchanges/binance', async (done) => {
        let defer = store.fetch_exchangeProduct('binance')
        expect(store.state).toEqual('pending')
        await defer  
        expect(store.state).toEqual('ready')
        expect(store.productDetail).toHaveProperty('name', 'Binance')
        done()
    })

    it('should return 1 cached result from api.coingecko/exchanges/binance', async (done) => {
        let defer = store.fetch_exchangeProduct('binance')
        await defer     
        expect(store.state).toEqual('ready')
        expect(store.cachedProduct['binance']).toHaveProperty('name', 'Binance')
        done()
    })

    it('should return ERROR from api.coingecko/exchanges/invalid12354', async (done) => {
       
        let defer = store.fetch_exchangeProduct('invalid12354')

        expect(store.state).toEqual('pending')
        await defer
        expect(store.state).toEqual('error')
        done()
       
    })

    it('should return ERROR from api.coingecko/exchanges/wrongPage', async (done) => {
        jest.setTimeout(2000)
        let defer = store.fetch_exchanges({ per_page: 10, page: 'wrongPage' })
        expect(store.state).toEqual('pending')
        await defer
        expect(store.state).toEqual('error')
        done()

    })

})
