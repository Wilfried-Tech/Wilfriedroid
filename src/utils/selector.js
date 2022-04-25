import { View } from '@src/view'

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