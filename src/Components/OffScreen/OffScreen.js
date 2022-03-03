import Interface from '../../Interface.js'
import content from './layout.html'

export default class OffScreen extends Interface {
  constructor(context) {
    super(context, 'OffScreen', content, { showStatusBar: false });

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