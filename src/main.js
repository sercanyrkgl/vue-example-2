//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import sayMyName from './plugins/sayMyName'
import fetchPokemons from './plugins/fetchPokemons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(sayMyName)
app.use(fetchPokemons)
app.use(createPinia())
app.use(router)

app.mount('#app')
