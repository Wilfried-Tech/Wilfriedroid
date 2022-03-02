/**           UTILS                **/

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
 * select multiples élément in the DOM
 * @param {String} selector
 * @returns {HTMLElement}
 */
export function getView(selector) {
  var elt = document.querySelector(selector);
  if (!elt) return null
  elt.css = function(prop, value) {
    if (!value) return elt.style.getPropertyValue(prop);
    elt.style.setProperty(prop, value);
    return elt
  }
  return elt
}

/**
 * select an élément in the DOM
 * @param {String} selector
 * @returns {NodeListOf<HTMLElement>}
 */
export function getViewGroup(selector) {
  var elts = document.querySelectorAll(selector);
  if (elts.length == 0 || !elts) return null
  elts.forEach(elt => {
    elt.css = function(prop, value) {
      if (!value) return elt.style.getPropertyValue(prop);
      elt.style.setProperty(prop, value);
      return elt
    }
  })
  elts.css = function(prop, value) {
    var values = [];
    elts.forEach(elt => values.push(elt.css(prop)));
    return values;
    elts.forEach(elt => elt.css(prop, value));
    return elts
  }
  return elts
}

/**
 * create an element
 * @param {String} tagName
 * @param {Object} attr
 * @param {Object} data
 * @param {Array<HTMLElement>} children
 * @return {HTMLElement}
 */
export function createView(tagName, attr, data, children) {
  var elt = document.createElement(tagName);
  if (attr) {
    for (var prop in attr) {
      if (prop != 'text') {
        elt.setAttribute(prop, attr[prop]);
      }
    }
    if (attr.text) {
      elt.innerHTML = attr.text;
    }
  }
  if (data) {
    for (var prop in data) {
      elt[prop] = data[prop];
    }
  }
  if (children) {
    children.forEach(child => {
      elt.appendChild(child);
    });
  }
  return elt;
}