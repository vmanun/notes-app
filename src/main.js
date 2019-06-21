import Vue from 'vue'
import App from './App'
import router from './router'
import NavBar from './components/elements/NavBar'
import FooterBar from './components/elements/FooterBar'
import NoteList from './components/elements/note-list'


Vue.component('nav-bar', NavBar)
Vue.component('footer-bar', FooterBar)
Vue.component('note-list', NoteList)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
