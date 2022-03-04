import Interface from '../../Interface.js'
import View from '../../View.js'
import content from './layout.html'

console.log(content);
export default class OffScreen extends Interface {
  constructor(context) {
    super(context, 'OffScreen', context.Views.screenOff, { showStatusBar: false });
    
  }

  boot() {
    if (this.context.power == 'off') {
      this.View.css('background', 'var(--window-boot-logo)').css('display', 'block');
      var _this = this;
      setTimeout(() => {
        this.View.css('background', 'var(--window-booting)');
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
