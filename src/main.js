import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NavBar from './components/elements/NavBar'
import FooterBar from './components/elements/FooterBar'
import NoteList from './components/elements/NoteList'
import NoteModals from './components/modals/NoteModals'
import SeeNoteModal from './components/modals/SeeNoteModal'
import EditNoteModal from './components/modals/EditNoteModal'


Vue.component('nav-bar', NavBar)
Vue.component('footer-bar', FooterBar)
Vue.component('note-list', NoteList)
Vue.component('note-modals', NoteModals)
Vue.component('see-note-modal', SeeNoteModal)
Vue.component('edit-note-modal', EditNoteModal)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
