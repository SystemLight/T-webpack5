<template>
  <h1 class="text-center">
    Hello {{ msg }}
  </h1>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

let msg = ref('Vue3')
</script>
