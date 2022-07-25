/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 13:44:15
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:33:14
 */
const dev = process.env.NODE_ENV === 'development',
  baseUrl = 'http://jinlun.gdzhuoshang.com';

export default defineEventHandler(async(event) => {
  const query = useQuery(event), { url, method } = event.req;
  let body,
    result = {
      code: 0,
      message: '',
      data: {},
    };
  if (method.toLowerCase() !== 'get') {
    body = await useBody(event);
  }

  try {
    const controller = new AbortController(),
      signal = controller.signal,
      timeoutPromise = timeout => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            controller.abort();
            reject();
          }, timeout);
        });
      };
    await Promise.race([$fetch(baseUrl + url, { method, body, signal }), timeoutPromise(15000)]).then(res => {
      result = res;
    }).catch(() => {
      result.code = 504;
      result.message = `${ url } 请求超时！`;
    });
  } catch (err) {
    console.log(err);
  }

  return result;
});
