import { createStore } from 'vuex'

const store = createStore({
    state: {
        person_info: {},
    },
    mutations: {
        setPersonInfo(state, item) {
            state.person_info = item
        }
    },
    getters: {
        _getPersonInfo: state => state.person_info
    }
})

export default store;