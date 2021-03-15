// NOTE this is nto a component but a class model fro Product.js and ProductDetail.js

import { makeObservable, observable, configure } from "mobx"
import { copy } from 'x-utils-es'

configure({
    enforceActions: "never"
})

export class ProductModel {
    entity = '' // this model is used by Product and ProductDetail 
    item = {}
    status = '' // [pending,error,ready]
    baseUrl = ''

    constructor(entity = '', item = {}, baseUrl) {
        makeObservable(this, {
            item: observable
        })
        this.entity = entity
        this.baseUrl = baseUrl
        this.item = copy(item)
        this.showSlack = true
    }

    get detailUrl() {
        return `${this.baseUrl}/${this.item.id}`
    }
    /**
     * Get a list of formatted social media items `[{name,type,url},...]`
     *
     * @readonly
     * @memberof ProductModel
     */
    get socialList() {
        return [this.item.facebook_url ? { name: 'Facebook', type: 'facebook', url: this.item.facebook_url } : null, this.item.twitter_handle ? { name: 'Twitter', type: 'twitter', url: `http://twitter.com/${this.item.twitter_handle}` } : null, this.item.telegram_url ? { name: 'Telegram', type: 'telegram', url: this.item.telegram_url } : this.item.reddit_url ? { name: 'Reddit', url: this.item.reddit_url, type: 'reddit' } : null, !this.item.slack_url ? { name: 'Slack', url: this.item.slack_url, type: 'slack' } : null
        ].filter(n => !!n)
    }
}
