/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 11:13:17
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:42:20
 */
import {
  typeOf as $typeOf,
  deepCopy as $deepCopy,
  recurseInto as $recurseInto,
} from '@u';

export {
  $typeOf, $deepCopy, $recurseInto,
};

export function $setTitle(webName, title) {
  return title ? `${ title } | ${ webName }` : webName;
}

export function $http(resource, { options = {}, query } = {}) {
  let str = '';
  if ($typeOf(query) === 'object') {
    const arr = [];
    Object.keys(query).forEach(k => {
      const item = query[k];
      if (item !== undefined && item !== null) arr.push(`${ k }=${ item }`);
    });
    if (arr.length) str = '?' + arr.join('&');
  }
  return $fetch(resource + str, options).then(res => {
    if (res.code != 200 && res.message) $message.error(res.message);
    return res.code == 200 ? res.data : null;
  });
}
