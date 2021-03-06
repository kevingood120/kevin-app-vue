import Vue from 'vue'

import Modal from './Modal.vue'

import Form from './Form.vue'
import TextField from './TextField.vue'
import Button from './Button.vue'

import Row from './Grid/Row.vue'
import Column from './Grid/Column.vue'

import DataTable from './Table/DataTable.vue'
import List from './List.vue'

import NavigationDrawer from './NavigationDrawer.vue'
import Header from './Header.vue'
import Container from './Container.vue'

Vue.component('k-modal', Modal)
Vue.component('k-form', Form)
Vue.component('k-text-field', TextField)
Vue.component('k-row', Row)
Vue.component('k-column', Column)
Vue.component('k-button', Button)
Vue.component('k-data-table', DataTable)
Vue.component('k-drawer', NavigationDrawer)
Vue.component('k-header', Header)
Vue.component('k-container', Container)
Vue.component('k-list', List)