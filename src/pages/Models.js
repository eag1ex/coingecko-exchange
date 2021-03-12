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

    constructor(entity='',item = {}, baseUrl) {
        makeObservable(this, {
            item: observable,
            onClick: action
        })
        this.entity = entity
        this.baseUrl = baseUrl
        this.item = copy(item)
       
        log(`[ProductModel][${this.entity}]`)
    }

    get detailUrl(){
        return `${this.baseUrl}/${this.item.id}`
    }

    onClick(d) {
        log('onclick', d)
    }

}
