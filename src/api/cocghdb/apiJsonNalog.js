import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const xmlBbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})
debugger
export const xmlDataBase = {
    getXmlData() {
        debugger
        return xmlBbInstance.get(`xml/1b29add5efd40bde62d80aaba0004bdf`)
            .then(response => {
                debugger
                return response
            })
            .catch(error => {
                debugger
                return error
            })
    }
}