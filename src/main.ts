import {createApp} from 'vue'

import '@/global.scss'
import router from '@/route'
import store from '@/store'
import App from '@/App.vue'

createApp(App).use(router).use(store).mount('#root')
