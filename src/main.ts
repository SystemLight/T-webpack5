import '@/styles/global.scss'

import {createApp} from 'vue'

import store from '@/store'
import {key} from '@/store/hook'
import router from '@/router'
import App from '@/App.vue'

import './permission'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#root')
