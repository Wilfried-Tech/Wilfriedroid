class TestElement extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });

    this._root.innerHTML = "it Works";
   
  }

  connectedCallback() {
    this.innerHTML = "constructor"
  }

  disconnectedCallback() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
    //todo
  }

  static get observedAttributes() {
    return [];
  }
}

window.customElements.define("elt-test", TestElement)//,{extends:"div"});
