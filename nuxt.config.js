/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-05 16:56:33
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:30:51
 */
import { defineNuxtConfig } from 'nuxt';

const path = require('path'), resolve = dir => path.resolve(__dirname, dir);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '@i': resolve('/assets/icons'),
    '@img': resolve('/assets/images'),
    '@u': resolve('utils'),
  },
  css: [
    'normalize.css',
    '@/assets/scss/index.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/variate.scss";'
        },
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-relaxed-unit': {
        rules: {
          rx: `div(${ process.env.VITE_REM_SCALE }).unit(rem)`,
        },
      },
    },
  },
});
