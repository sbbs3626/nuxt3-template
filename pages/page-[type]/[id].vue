<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 12:08:59
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 16:02:12
-->
<script setup>
const route = useRoute();

const [data] = await Promise.all([
  http('/api/web/common/homeArticle'),
]);
console.log(data);

useHead({
  titleTemplate: setTitle(route.params.type + ' - ' + route.params.id),
});
</script>

<template>
  <div>
    {{ route.params.type + ' - ' + route.params.id }}
  </div>
</template>

<style lang="scss" scoped>

</style>
