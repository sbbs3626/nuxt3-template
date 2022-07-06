/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 10:57:13
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-06 11:05:25
 */
export function typeOf(target) { // 判断数据类型
  const getProtoStr = Object.prototype.toString,
    map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
  return map[getProtoStr.call(target)];
}

export function deepCopy(target) { // 数据深拷贝
  let result;
  switch (typeOf(target)) {
    case 'array':
      result = [];
      break;
    case 'object':
      result = {};
      break;
    default:
      result = target;
      return result;
  }
  for (const i in target) {
    result[i] = typeOf(target[i]) === 'array' || typeOf(target[i]) === 'object' ? deepCopy(target[i]) : target[i];
  }
  return result;
}
