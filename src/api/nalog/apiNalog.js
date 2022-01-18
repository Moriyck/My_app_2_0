import *as axios from 'axios'
import { baseUrlnalog } from '../API'

const nALOGdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlnalog
})

export const nalogData = {
    getINNAsset(INN) {
        return nALOGdbInstance.post(`api/v1/tracker/taxpayer_status`, {
            "inn": INN,
            "requestDate": "2021-01-04"
        }
        )
            .then(response => {

                return response
            })
            .catch(error => {
                return error
            })
    }
}

