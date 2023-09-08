import axios from 'axios'

export const getCurrencies = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios({ url: 'https://panel.modirdev.com/api/prices', method: 'GET' })
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
};
export const getCurrencyGraph = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios({ url: 'https://panel.cryptojet.solutions/api/prices', method: 'GET' })
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
};
export const getPosts = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios({ url: 'https://mentorvid.com/wp-json/wp/v2/posts?filter', method: 'GET' })
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
};
export const getComments = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios({ url: 'https://panel.modirdev.com/api/feedbacks', method: 'GET' })
            .then(resp => {
                resolve(resp.data)
            })
            .catch(err => {
                reject(err)
            })
    })
};