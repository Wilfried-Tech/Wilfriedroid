import Interface from '../../Interface.js'
import View from '../../View.js'
import content from './layout.html'

export default class OffScreen extends Interface {
  constructor(context) {
    super(context, 'OffScreen', content, { showStatusBar: false });
    this.View = context.Views.screenOff;
    this.View.html('<input />').css('color','#fff');
    alert(this.View.node.outerHTML);
  }

  boot() {
    var Views = this.context.Views;
    if (this.context.power == 'off') {
      Views.screenOff.css('background', 'var(--window-boot-logo)').css('display', 'block');
      var _this = this;
      setTimeout(() => {
        Views.screenOff.css('background', 'var(--window-booting)');
        // _this.displayInterface('window').then(() => {
        //phone.screen.off.css('display', 'block');
        //});
        setTimeout(() => {
          //_this.displayInterface('lockscreen').then(() => {
            _this.context.power = 'on';
          //  Message.listenChange();
          //})
        }, 11750);
      }, 1500);
      this.context.power = 'booting';
    }
  }
}

