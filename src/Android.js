/**
 * 
 */

const __config = {
  password: '1234',
  volume: 100,
  power: 'off'
}

export default class Android {
  constructor(views, lastConfig = {}) {
    this.Views = views;
  }

  //     GETTER AND SETTER

  get password() {
    return __config.password
  }

  get volume() {
    return __config.volume
  }

  set volume(vol) {
    if (vol >= 0 && vol <= 100) {
      __config.volume = vol;
    }
  }

  get power() {
    return __config.power
  }

  set power(state) {
    if (['on', 'off', 'sleep'].indexOf(state) == -1) return
    this.Views.Tools.power.css('color', (state == 'on' ? 'lime' : (state == 'off' ? 'red' : (state == 'sleep' ? 'orange' : ''))));
    __config.power = state;
  }
  
  setContentView(view){
    this.Views.screen.node.appendChild(view.node)
  }
}
