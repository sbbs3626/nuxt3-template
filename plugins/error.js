/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-05 18:04:39
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-05 18:29:38
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => { // 全局错误报告
    // ...
  };
});
