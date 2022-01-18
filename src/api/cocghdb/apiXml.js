import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const xmlBbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})
export const xmlDataBase = {
    getXmlData() {
        return xmlBbInstance.get(`xml/3ec93ded2ef71972bf76da2e4e00018b/VO_RRMSPSV_0000_9965_20210111_b81bbf29-a6c7-4e65-937b-a41f37f3f715.xml`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }
}