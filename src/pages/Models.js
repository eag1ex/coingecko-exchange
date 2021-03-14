import { makeObservable, observable, action, configure } from "mobx"
import { log, copy } from 'x-utils-es'

configure({
    enforceActions: "never"
})

export class ProductModel {
    entity='' // this model is used by Product and ProductDetail 
    item = {}
    status = '' // [pending,error,ready]
    baseUrl=''

    constructor(entity = '', item = {}, baseUrl) {
        makeObservable(this, {
            item: observable,
            onClick: action
        })
        this.entity = entity
        this.baseUrl = baseUrl
        this.item = copy(item)
       
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
        return [this.item.facebook_url ? { name: 'Facebook', type: 'facebook', url: this.item.facebook_url } : null, this.item.twitter_handle ? { name: 'Twitter', type: 'twitter', url: `http://twitter.com/${this.item.twitter_handle}` } : null, this.item.telegram_url ? { name: 'Telegram', type: 'telegram', url: this.item.telegram_url } : null
        ].filter(n => !!n)
    }

}
