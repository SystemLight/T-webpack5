import '@/styles/tailwind.css'
import '@/styles/global.scss'
import '@/styles/themes.scss'

import {createApp} from 'vue'

import store from '@/store'
import {key} from '@/store/composables'
import router from '@/router'
import App from '@/App.vue'

import './permission'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#root')
