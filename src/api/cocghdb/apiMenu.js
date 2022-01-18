import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const menuAPI = {

    getAllMenu(menuId) {
        return couchdbInstance.get(`all_menu/_all_docs?include_docs=true`)
            .then(response => {
                return response.data.rows
            })
    }
}