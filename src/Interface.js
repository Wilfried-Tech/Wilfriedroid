import Components from './Components.js'

export default class Interface extends Components {
  constructor(context, name, view, param) {
    super(context, name, view);
    this.showStatusBar = param.showStatusBar;
    this.View.node.classList.add('interface');
    this.View.context = this;
    super.initParams();
  }
  /*static create($interface) {
    var $Interface = Interface[$interface.name[0].toUpperCase() + $interface.name.slice(1)];
    if ($Interface) {
      return new $Interface($interface);
    } else {
      console.error(`Unable to create ${$interface.name} interface`);
      return null;
    }
  }*/

}

//AndroidUtils.Interface = Interface;
