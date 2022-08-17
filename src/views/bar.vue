<template>
  <div>bar</div>
  <button @click="handleExit">
    退出登录
  </button>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

import {useStore} from '@/store/composables'

const store = useStore()
const router = useRouter()

function handleExit() {
  store.commit('user/removeToken')
  router.replace('/')
}
</script>
