import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})
export const myAssetsAPI = {

    getMyAssets(nameMy) {
        return couchdbInstance.get(`my_assets/_design/owner/_view/new-view?include_docs=true&inclusive_end=true&start_key=%22${nameMy}%22&end_key=%22${nameMy}%22&stable=true`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    getProfileAsset(assetsId) {
        return couchdbInstance.get(`my_assets/${assetsId}`)
            .then(response => {
                return response
            })
    }
}