import View from './View.js'

class Components {
  constructor(context, name, view) {
    this.name = name;
    this.context = context;
    this.showStatusBar = true
    this.activities = [];
    this.View = View.createView('div', {
      id: this.name,
      text: view
    });

    this.context.setContentView(this.View);
  }

  getView(selector, _all = false) {
    var elts = this.View.querySelectorAll(selector);
    if (elts.length) {
      elts.forEach(elt => {
        elt.css = function(prop, value) {
          if (!value) return elt.style.getPropertyValue(prop);
          elt.style.setProperty(prop, value);
          return elt;
        }
      })
      elts.css = function(prop, value) {
        if (!value) {
          var values = [];
          elts.forEach(elt => values.push(elt.css(prop)))
          return values;
        }
        elts.forEach(elt => elt.css(prop, value))
      }
    }
    return (_all) ? elts : elts[0];
  }

  onBack() {}

  onCreate() {
    this.initParams();
  }
  onPause() {}

  onStop() {}

  onRestore() {
    this.initParams();
  }

  onDestroy() {
    this.onStop();
    this.View.remove();
    //Android.unregisterComponent();
  }

  initParams() {}

}
