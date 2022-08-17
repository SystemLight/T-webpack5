<template>
  <div>
    <div>foo</div>
    <div>{{ token }}</div>
    <div
      class="w-[100px] h-[100px] bg-blue-500"
      @click="handleClick"
    >
      点击
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

let a = reactive({value: 12})
let token = a.value

function handleClick() {
  a.value = 323
  console.log('click')
}
</script>
