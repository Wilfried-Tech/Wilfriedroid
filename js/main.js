const Views = {
  phone: System.getView('#phone'),
  screen: System.getView('#screen'),
  screenOff: System.getView('#off-screen'),
  Tools: {
    fullscreen: System.getView('.phone-tool-fullscreen'),
    scale: System.getView('.phone-tool-scale'),
    volumeUp: System.getView('.phone-tool-volume-up'),
    volumeDown: System.getView('.phone-tool-volume-down'),
    power: System.getView('.phone-tool-power-off'),
    guide: System.getView('.phone-tool-user-guide'),
    exit: System.getView('.phone-tool-exit')
  },
  NavBar: {
    recent: System.getView('.nav-btn-recent'),
    home: System.getView('.nav-btn-home'),
    back: System.getView('.nav-btn-back')
  },
  StatusBar: {
    time: System.getView('.status-bar-time'),
    battery: System.getView('.status-bar-battery'),
    batteryLevel: System.getView('.status-bar-battery-level'),
    batteryValue: System.getView('.status-bar-battery-value'),
    batteryCharge: System.getView('.starus-bar-battery-charge'),
    simCardType: System.getView('.status-bar-signal-type'),
    mbps: System.getView('.status-bar-mbps'),
    wifi: System.getView('.status-bar-wifi'),
    network: System.getView('.status-bar-network')
  }
};

var android = new System.Android(Views, null);

var OffScreen = new System.Components.OffScreen(android);

new System.Events.PhoneLongClickEvent().registerElement(Views.Tools.power.node);
Views.Tools.power.on('phone-longclick', () => {
  OffScreen.boot();
})


/*$ = (e) => document.querySelector(e)

new System.Events.PhoneTimeEvent().registerElement(document.querySelector('.status-bar-time')).addEventListener('phone-time', (e) => {
  e.target.innerText = e.time;
})

console.log(System);

new System.Events.PhoneBatteryEvent().registerElement($('.status-bar-battery')).addEventListener('phone-battery', (e) => {
  var v = $('.status-bar-battery-value');
  var c = $('.status-bar-battery-charge');
  $('.status-bar-battery-level').innerText = `${e.level}%`;
  c.style.display = e.charging ? 'block' : 'none';
  v.style = `width: ${e.level}%; background: ${e.charging? 'lime':e.level<=15? 'red': 'white'}`
})


*/
