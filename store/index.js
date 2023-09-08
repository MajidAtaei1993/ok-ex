import Vuex from 'vuex'
import * as actions from './actions'

const store = () => {
    return new Vuex.Store({
        state: {},
        getters: {},
        actions,
        mutations: {}
    })
}