import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import esriConfig from '@arcgis/core/config';

esriConfig.assetsPath = 'https://js.arcgis.com/4.24/@arcgis/core/assets';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
