/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-05 17:47:05
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:32:20
 */
import * as globalData from '/composables/globalData';
import { $store } from '/composables/store';

const _globalData = {};

[globalData].forEach(item => {
  for (const k in item) {
    _globalData[k.replace('$', '')] = item[k];
  }
});

export default defineNuxtPlugin(() => {
  return {
    provide: { // 注册 template 中使用的全局属性
      ..._globalData,
      store: $store,
    }
  };
});
