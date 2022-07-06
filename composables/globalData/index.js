/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 11:13:17
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 14:46:08
 */
export function setTitle(title) {
  return `${ title } | %s`;
}

export function http(resource, init, query) {
  let str = '';
  if (typeOf(query) === 'object') {
    const arr = [];
    Object.keys(query).forEach(k => {
      const item = query[k];
      if (item !== undefined && item !== null) arr.push(`${ k }=${ item }`);
    });
    if (arr.length) str = '?' + arr.join('&');
  }
  return $fetch(resource + str, init);
}
