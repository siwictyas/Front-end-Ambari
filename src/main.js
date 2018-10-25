// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Navbar } from 'bootstrap-vue/es/components'
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import ProgressBar from 'vue-simple-progress'
import Dropdown from 'bp-vuejs-dropdown'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import { Collapse } from 'bootstrap-vue/es/components'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Highcharts from 'highcharts'
import 'vue-status-indicator/styles.css'
import { StatusIndicator } from 'vue-status-indicator'

Vue.use(Navbar)
Vue.use(BootstrapVue)
Vue.use(Dropdown)
Vue.use(Collapse)
Vue.use(VueChartkick, { Chartkick })
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueChartkick, {adapter: Highcharts})
Vue.component('b-navbar', bNavbar);
Vue.component('v-icon', Icon);
Vue.component('ProgressBar', ProgressBar);
Vue.component('b-collapse', bCollapse);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
