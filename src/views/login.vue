<template>
  <div
    class="w-[100px] h-[100px] bg-blue-500"
    @click="handleClick"
  >
    点击登陆
  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'

import {reqLogin} from '@/api/auth'

const store = useStore()
const router = useRouter()
const route = useRoute()

function handleClick() {
  reqLogin().then(({data}) => {
    if (data.data.token) {
      store.commit('user/setToken', data.data.token)
      router.replace(route.query['redirect'] || '/')
    } else {
      console.log('登陆失败')
    }
  })
}
</script>
