import *as axios from 'axios'
import { baseUrlOpenDataPortalApi } from '../API'

const openDataPortalInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlOpenDataPortalApi,
    // headers: {
    // "API-KEY": "c780e8a185cae7fcc2e212e5dbe5f69b",
    // }
})

export const openData = {
    getOpenData(INN) {

        return openDataPortalInstance.get(`organization/7710474375/dataset?access_token=c780e8a185cae7fcc2e212e5dbe5f69b`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }
}

