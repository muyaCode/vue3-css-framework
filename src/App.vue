<script setup>
import { onMounted } from "vue"

// 给整个页面注入data-theme主题属性，用于控制页面的主题
onMounted(() =>{
  window.document.documentElement.setAttribute(
    "data-theme",
    "default"
  );
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">

</style>
