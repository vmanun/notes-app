import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NavBar from './components/elements/NavBar'
import FooterBar from './components/elements/FooterBar'
import NoteList from './components/elements/NoteList'
import SeeNoteModal from './components/modals/SeeNoteModal'


Vue.component('nav-bar', NavBar)
Vue.component('footer-bar', FooterBar)
Vue.component('note-list', NoteList)
Vue.component('see-note-modal', SeeNoteModal)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
