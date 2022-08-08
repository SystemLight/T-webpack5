import '@/styles/global.scss'

import {createApp} from 'vue'

import router from '@/router'
import store from '@/store'
import {key} from '@/store/hook'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#root')
