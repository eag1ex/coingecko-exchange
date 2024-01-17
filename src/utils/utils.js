
import { isObject, delay } from 'x-utils-es'

/**
 * fetch handler if status error reject response
 * @param {*} response 
 */
export const fetchHandler = async (response) => {
    if (response.ok) return response.json()
    else {
        
        if (!response.body) {
            return Promise.reject('body has no content') 
        }

        let resp       
        try {
            resp = await response.json() // {message,code,error}
        } catch (err) {
            return Promise.reject(err)
        }

        // if our server is up we know what to expect, else can return empty string
        if (isObject(resp)) {
            return Promise.reject(resp.error)
        } else return Promise.reject(resp || "HTTP-Error: " + resp.status)
    }
}

/**
 * Fetch timeout helper
 * @param {*} timeout 
 */
export const timeoutHandler = (timeout = 5000) => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort('Aborted'), timeout)
    delay(100).then(n => {
        clearTimeout(timer)
    })
    return controller 
}
