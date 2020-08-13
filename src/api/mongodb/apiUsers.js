import *as axios from 'axios'
import { baseUrlAtlasMongoDb } from '../API'
debugger
const Instance = axios.create({
    useNewUrlParser: true,
    useFindAndModify: true,
    cors: true,
    //withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        //"Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
        "API-KEY": "4871c49a-59b3-4b8a-8fa2-5848b65c4e61"
    },
    baseURL: baseUrlAtlasMongoDb
})

export const usersAPIM = {

    getUsers() {
        return Instance.get(`users`)
            .then(response => {
                debugger
                return response
            })
            .catch(error => {
                debugger
                return error.response
            })
    },

    getUsersFollow(userId) {
        return Instance.get(`follow/_design/MyDocument/_view/allMyDocuments?include_docs=true&inclusive_end=true&start_key="${userId}"&end_key="${userId}"`)
            .then(response => {
                return response.data.rows
            })
    },

    deleteFollow(userId, revFollow) {
        return Instance.delete(`follow/${userId}?rev=${revFollow}`)
    },

    postFollow(userId, nameMy) {
        return Instance.post(`follow/`, { nameMy: nameMy, followName: userId })
    }
}