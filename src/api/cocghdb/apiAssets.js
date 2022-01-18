import *as axios from 'axios'
import { baseUrlLocalCouchDb } from '../API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})
export const myAssetsAPI = {

    getMyAssets(nameMy) {
        return couchdbInstance.get(`my_assets/_design/owner/_view/new-view?include_docs=true&inclusive_end=true&start_key="${nameMy}"&end_key="${nameMy}"&stable=true`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    getAllAssets() {
        return couchdbInstance.get(`my_assets/_all_docs`)
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
    },

    findNamesAssets(name) {
        return couchdbInstance.get(`my_assets/_design/name/_view/allName?keys=["${name}"]`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    creatingNewAsset(name, nameMy, taxSystem) {
        return couchdbInstance.post(`my_assets/`, {
            name: name,
            owner: nameMy,
            taxSystem: taxSystem,
            knowledge: 0,
            knack: 0,
            skills: 0
        })
    },

    saveANewAsset(doc, newDate) {
        return couchdbInstance.put(`my_assets/${doc._id}`, {
            ...doc, newDate
        })
    },

    //Cоздать элемент предприятия
    createAnEnterpriseElement(name, idAncestor) {
        
        return couchdbInstance.post(`elements_of_the_structure_of_all_enterprises/`, { name: name, idAncestor: idAncestor })
    },

    //Запрос на элементы структуры предприятия
    getEnterpriseElement(pageSaze, skipSaze, idAncestor) {
        return couchdbInstance.get(`elements_of_the_structure_of_all_enterprises/_design/idAncestor/_view/idAncestor?include_docs=true&inclusive_end=true&start_key=["${idAncestor}"]&end_key=["${idAncestor}",{}] &limit=${pageSaze}&skip=${skipSaze}`)
            .then(response => {
                return response
            })
    },

    //Cоздать элемент второго уровня (name: имя нового элемента, idAncestor: идентификатор предка нового элемента)
    createASecondLevelElement(name, idAncestor) {
        debugger
        return couchdbInstance.post(`elements_of_the_structure_of_second_level_enterprises/`, { name: name, idAncestor: idAncestor })
    },

    //Запрос на элементы структуры предприятия второго уровня
    getEnterpriseElementSecondLevel(pageSaze, skipSaze, idAncestor) {
        debugger
        return couchdbInstance.get(`elements_of_the_structure_of_second_level_enterprises/_design/idAncestor/_view/idAncestor?include_docs=true&inclusive_end=true&start_key=["${idAncestor}"]&end_key=["${idAncestor}",{}] &limit=${pageSaze}&skip=${skipSaze}`)
            .then(response => {
                debugger
                return response
            })
    },

}