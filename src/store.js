import { createStore } from 'vuex'

const store = createStore({
    state: {
        person_info: {},
        data: []
    },
    mutations: {
        setPersonInfo(state, item) {
            state.person_info = item
        },
        setData(state, item) {
            state.data = item
        }
    },
    getters: {
        _getPersonInfo: state => state.person_info,
        _getData: state => state.data
    }
})

export default store;