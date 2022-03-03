var __node = null;

/**
 * @class
 */
export default class View {
  /**
   * @param {HTMLElement} node
   */
  constructor(node) {
    if (node instanceof HTMLElement) {
      __node = node;
    } else {
      return null;
    }
  }

  /**
   * @returns {HTMLElement}
   */
  get node() {
    return __node;
  }

  /**
   * get/set css style
   * @param {String} prop
   * @param {String} [value]
   * @returns {View|String}
   */
  css(prop, value) {
    if (!value) {
      return this.node.style.getPropertyValue(prop);
    }
    this.node.style.setProperty(prop, value);
    return this;
  }

  /**
   * get/set attribute value
   * @param {String} attrName
   * @param {String} [value]
   * @returns {String|View}
   */
  attr(attrName, value) {
    if (!value) {
      return this.node.getAttribute(prop);
    }
    this.node.setAttribute(prop, value);
    return this;
  }

  /**
   * get/set content of view and evaluate hit
   * @param {String} [htmlString]
   * @returns {String|View}
   */
  html(htmlString) {
    if (!htmlString) return this.node.innerHTML;
    this.node.innerHTML = htmlString;
    return this;
  }

  /**
   * get/set content of view as raw
   * @param {String} [text]
   * @returns {String|View}
   */
  content(text) {
    if (!text) return this.node.innerText;
    this.node.innerText = text;
    return this;
  }

  /**
   * create an element
   * @param {String} tagName
   * @param {Object} attr
   * @param {Object} data
   * @param {Array<HTMLElement>} children
   * @return {View}
   */
  static createView(tagName, attr, data, children) {
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
    return new View(elt);
  }
}
