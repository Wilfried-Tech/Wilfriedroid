/**           UTILS                **/

import View from './View.js'

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
      a[key] == b[i][key];
    })
  }
  return a;
}

/**
 * select an élément in the DOM
 * @param {String} selector
 * @returns {View}
 */
export function getView(selector) {
  var elt = document.querySelector(selector);
  //return elt
  return (!elt) ? null : new View(elt);
}

/**
 * select multiple élément in the DOM
 * @param {String} selector
 * @returns {Array<View>}
 */
export function getViewGroup(selector) {
  var elts = document.querySelectorAll(selector);
  if (elts.length == 0 || !elts) return null
  return Array.prototype.map.call(elts, elt => new View(elt));

}
