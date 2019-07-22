import Vue from 'vue'
import Vuex from 'vuex'
import Notes from './modules/notes'
import Modals from './modules/modals'

Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        Notes,
        Modals
    }
})