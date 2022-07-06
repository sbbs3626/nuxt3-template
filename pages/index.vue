<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-05 17:50:36
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 15:55:57
-->
<script setup>
const navName = '首页';

definePageMeta({
});
useHead({
  titleTemplate: setTitle(navName),
});
</script>

<template>
  <div>
    {{ navName }}
    <img src="@img/logo.png">
  </div>
</template>

<style lang="scss" scoped>

</style>
