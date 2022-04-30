/**
 * give the type of an variable
 * @param {*} arg
 * returns {String}
 */
export function typeOf(arg) {
  var s = Object.prototype.toString.call(arg);
  /\[object (\w+)\]/i.exec(s);
  return RegExp.$1.replace(/HTML|Element/g, '').toLowerCase();
}

/**
 * merge 2 or many object
 * @param {Object} a
 * @param {Array<Object>} b
 * @returns {Object}
 */
export function merge(a, ...b) {
  if (!a || typeOf(a) !== 'object' || b.length == 0) return a;
  for (var i = 0; i < b.length; i++) {
    Object.keys(b[i]).forEach(key => {
      a[key] = b[i][key];
    })
  }
  return a;
}

/**
 * convert string to CamelCase
 * @param {String} str
 * @returns {String}
 */
 export function toCamelCase(str){
   return str.split(/-| |\n|\r|_/).map(s => s[0].toUpperCase()+s.substring(1).toLowerCase()).join('');
 }

