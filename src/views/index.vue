<template>
  <div>
    <h1 class="title">
      Hello {{ msg }}
    </h1>
    <div class="p-3 flex justify-center">
      <router-link
        class="btn mr-3"
        to="/foo"
      >
        foo
      </router-link>
      <router-link
        class="btn"
        to="/bar"
      >
        bar
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let msg = ref('Vue3')
</script>

<style lang="scss" scoped>
.title {
  @apply text-center text-3xl py-3 text-orange-400;
}

.btn {
  @apply inline-block leading-9 px-6 bg-blue-500 rounded text-white text-lg;
}
</style>
