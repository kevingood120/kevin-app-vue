import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faHome,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faHome, faTimes)

Vue.component('fa-icon', FontAwesomeIcon)