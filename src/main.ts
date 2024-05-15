// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import MainLayout from '@/layouts/MainLayout.vue'

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    components,
    directives,
  })

const app = createApp(App)

app.component('MainLayout', MainLayout)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
