import { View } from '@src/view'
import { toCamelCase,typeOf } from '@src/utils'

export class Components {
  constructor(context, name, view) {
    this.name = name;
    this.context = context;
    this.showStatusBar = true
    this.activities = [];
    if (view instanceof View) {
      this.View = view;
    } else {
      this.View = View.createView('div', {
        id: this.name,
        text: view
      });
    }

    this.context.setContentView(this.View);
  }

  getView(selector, _all = false) {
    var elts = this.View.node.querySelectorAll(selector);
    if (elts.length != 0) {
      if (!_all) return new View(elts[0]);
      return Array.prototype.map.call(elts, elt => new View(elt));
    }
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
