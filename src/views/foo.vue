<template>
  <div>
    foo
    {{ token }}
    <div
      class="w-[100px] h-[100px] bg-blue-500"
      @click="handleClick"
    >
      点击
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from '@/store/hook'
import {reqLogin} from '@/api'

let store = useStore()
let token = $computed(() => store.state.user.token)

function handleClick() {
  reqLogin().then(({data}) => {
    console.log(data)
    store.commit('user/setToken', data.data.token)
  })
}
</script>
