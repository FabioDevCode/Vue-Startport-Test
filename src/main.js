import './assets/main.css'

import { createApp } from 'vue'
import StarportPlugin from 'vue-starport'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(StarportPlugin({ keepAlive: true }))
app.mount('#app')
