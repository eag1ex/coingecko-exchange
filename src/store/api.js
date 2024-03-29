/**
 * Refer to `https://www.coingecko.com/api/documentations/v3#/` for details
 */
import queryString from 'query-string'
import { isEmpty } from 'x-utils-es'

// https://api.coingecko.com/api/v3
const apiUrlBase = process.env.REACT_APP_SERVER_API || process.env.REACT_APP_COINGECKO_API

const api = {
    base: apiUrlBase,
    /**
     * (GET) 
     * @param {*} {params.per_page, params.page}` how many items to display per result
     * refer to: `https://www.coingecko.com/api/documentations/v3#/exchanges_(beta)/get_exchanges`
     * @returns {*} `[{id,name,year_established,country,description,url,image,has_trading_incentive,has_trading_incentive,trust_score,trust_score_rank,trade_volume_24h_btc,trade_volume_24h_btc_normalized},...]`
     */
    exchanges: (params = {}) => {
        if (isEmpty(params)) return `${apiUrlBase}/exchanges` 
        else {
            let q = queryString.stringify(params)
            return `${apiUrlBase}/exchanges?${q}`
        }
    },

    /**
     * (GET)
     * @param {*} id 
     */
    exchangesProduct: (id) => `${apiUrlBase}/exchanges/${id}`
}

export { api } // >> Object.freeze(api)
