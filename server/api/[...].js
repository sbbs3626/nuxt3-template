/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 13:44:15
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 15:27:29
 */
const baseUrl = 'http://jinlun.gdzhuoshang.com';

export default defineEventHandler(async(event) => {
  const query = useQuery(event), { url, method } = event.req;
  let body, result;
  if (method.toLowerCase() !== 'get') {
    body = await useBody(event);
  }

  try {
    const res = await $fetch(baseUrl + url, { method, body });
    result = res.data;
  } catch {
    result = null;
  }

  return result;
});
