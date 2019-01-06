import Vue from 'vue'
import App from './App'
import './index.sass'
import './fonts.sass'
import Icons from './plugins/icons'
import BaseComponents from './plugins/baseComponents'
import 'vue-awesome/icons/shopping-cart'
import 'vue-awesome/icons/brain'
import 'vue-awesome/icons/bug'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/facebook-f'

Vue.config.productionTip = false
Vue.use(Icons)
Vue.use(BaseComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
