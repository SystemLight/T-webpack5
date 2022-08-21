<template>
  <div
    class="w-[100px] h-[100px] bg-blue-500"
    @click="handleClick"
  >
    点击登陆
  </div>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'

import {login} from '@/api/auth'
import {useStore} from '@/store/composables'

const store = useStore()
const router = useRouter()
const route = useRoute()

function handleClick() {
  login().then(({data}) => {
    store.commit('user/setToken', data.token)
    router.replace((route.query['redirect'] as string) || '/')
  })
}
</script>
