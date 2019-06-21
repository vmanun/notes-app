import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/pages/Dashboard'

Vue.component('dashboard', Dashboard)

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard
        }
    ]
})