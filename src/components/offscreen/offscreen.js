import { Interface } from '@src/interfaces'
import { View } from '@src/view'
import content from './layout.html'

console.log(content);
export class OffScreen extends Interface {
  constructor(context) {
    super(context, 'OffScreen', context.Views.screenOff, { showStatusBar: !false });
    this.View.on('phone-battery',onBattery.bind(this));
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

function onBattery(ev) {
  console.log(ev);
}