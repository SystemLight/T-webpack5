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
import {reqErr} from '@/api/auth'

let store = useStore()
let token = $computed(() => store.state.user.token)

function handleClick() {
  reqErr().then(({data}) => {
    console.log(data)
  })
}
</script>
