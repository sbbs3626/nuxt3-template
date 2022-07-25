/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-25 16:49:01
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:35:26
 */
export default defineNuxtPlugin(() => {
  if (process.client) {
    const setDomStyle = () => {
      const standardWidth = 750,
        maxMobileWidth = $store.get('settings/maxMobileWidth'),
        width = document.documentElement.clientWidth,
        scale = import.meta.env.VITE_REM_SCALE;
      document.documentElement.style.fontSize = width > maxMobileWidth ? `${ scale / 2 }px` : (width * scale / standardWidth + 'px');
    };
    setDomStyle();
    window.addEventListener('resize', setDomStyle);
  }
});
