import { makeObservable, observable, action, observe, runInAction, configure } from "mobx"
import { log, onerror,copy } from 'x-utils-es'

configure({
    enforceActions: "never"
})

export class ProductModel {
    entity='' // this model is used by Product and ProductDetail 
    item = {}
    status = '' // [pending,error,ready]
    baseUrl=''
    detailUrl=''
    constructor(entity='',item = {}, baseUrl, detailUrl) {
        makeObservable(this, {
            item: observable,
            onClick: action
        })
        this.baseUrl = baseUrl
        this.detailUrl = detailUrl
        this.item = copy(item)
        this.entity = entity
        log(`[ProductModel][${this.entity}]`)
    }

    onClick(d) {
        log('onclick', d)
    }

}
