<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 11:39:22
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:26:17
-->
<script setup>
const navInfo = computed(() => $store.get('navInfo'));
</script>

<template>
  <div>
    <Title>{{ $setTitle('官网', navInfo.name) }}</Title>

    <div class="nav_wrap">
      <NuxtLink to="/">首页</NuxtLink>
      <NuxtLink to="/page-img/1">图片</NuxtLink>
      <NuxtLink to="/page-list/2">文章列表</NuxtLink>
      <NuxtLink to="/page-detail/3">文章详情</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.nav_wrap {
  margin: 10px 0;
  text-align: center;

  > * + * {
    margin-left: 10px;
  }
}
</style>
