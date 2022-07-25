/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-07-06 10:57:13
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 17:27:26
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

export function recurseInto(list, callback, options = {}, parent = null, level = 1) { // 嵌套递归
  options = {
    children: 'children',
    ...options,
  };

  if (!list || !list.length || typeOf(callback) !== 'function') return;

  for (let i = 0; i < list.length; i++) { // 遍历第一层，每层向里递归
    const next = () => {
        const _list = list[i][options.children];
        if (_list && _list.length) {
          return !!recurseInto(_list, callback, options, list[i], level + 1);
        }
      },
      val = callback(list[i], { list, index: i, parent, level });
    if (val === 'break') return true;
    if (val === 'continue') continue;
    if (next()) return true;
  }
}
