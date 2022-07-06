/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-05 16:56:33
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 15:58:30
 */
import { defineNuxtConfig } from 'nuxt';

const path = require('path'), resolve = dir => path.resolve(__dirname, dir);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '@i': resolve('/assets/icons'),
    '@img': resolve('/assets/images'),
  },
  css: [
    'normalize.css',
    '@/assets/scss/index.scss',
  ],
});
