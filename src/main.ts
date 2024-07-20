// import './assets/main.css'
import './index.css'

// toast alert
import type { PluginOptions } from 'vue-toastification'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
  draggable: true,
  icon: true,
  timeout: 2000
}

const vuetify = createVuetify({
  components,
  directives
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(Toast, options)
app.use(pinia)
app.use(router)

app.mount('#app')
