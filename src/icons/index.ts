import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faHome,
  faTimes,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars, 
  faHome, 
  faTimes,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleDoubleRight
)

Vue.component('fa-icon', FontAwesomeIcon)