
import { isObject } from 'x-utils-es'



/**
 * fetch handler if status error reject response
 * @param {*} response 
 */
export const fetchHandler = async (response) => {
    if (response.ok) return response.json()
    else {

        let resp = await response.json() // {message,code,error}
        // if our server is up we know what to expect, else can return empty string
        if (isObject(resp)) {
            return Promise.reject(resp.message)
        } else Promise.reject(resp || "HTTP-Error: " + resp.status)
    }
}

