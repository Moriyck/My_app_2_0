import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const settingsAPI = {

    setProfile(userId, propername, surname, birthdate) {
        return couchdbInstance.post(`profile/`, { _id: userId, name: propername, surname: surname, birthdate: birthdate, follow: false })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    updateProfileAboutMe(userId, doc, description, motto, status) {
        return couchdbInstance.put(`profile/${userId}`, { ...doc, description: description, motto: motto, status: status })
            .then(response => {
                debugger
                return response
            })
            .catch(error => {
                return error.response
            })
    }
}