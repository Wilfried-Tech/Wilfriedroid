import * as Utils from './Utils.js'

/**
 * 
 */
const defaultInitDict = {
  composed: false,
  bubbles: false,
  cancelable: true
}

export class PhoneEvent extends Event {
  constructor(name, eventInitDic) {
    super(name, Utils.merge(defaultInitDict, eventInitDic));
  }
  registerElement(element) {}
}

export class PhoneTimeEvent extends PhoneEvent {
  constructor() {
    super('phone-time', { cancelable: false })
  }

  registerElement(element) {
    super.registerElement(element);

    var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
    setInterval(() => {
      var d = new Date();
      var _ev = new PhoneTimeEvent();
      _ev.hour = d.getHours();
      _ev.minute = d.getMinutes();
      _ev.second = d.getSeconds();
      _ev.day = days[d.getDay()];
      _ev.numDay = d.getDate();
      _ev.month = months[d.getMonth()];
      _ev.year = d.getFullYear();
      _ev.time = (_ev.hour > 9 ? _ev.hour : '0' + _ev.hour) + ':' + (_ev.minute > 9 ? _ev.minute : '0' + _ev.minute);
      _ev.date = `${_ev.day}-${_ev.numDay}-${_ev.month}-${_ev.year}`;
      element.dispatchEvent(_ev);
    }, 1000);
    return element
  }
}

export class PhoneBatteryEvent extends PhoneEvent {
  constructor() {
    super('phone-battery', { cancelable: false });
  }

  registerElement(element) {
    super.registerElement(element);

    function create(e) {
      var _ev = new PhoneBatteryEvent();
      _ev.level = Math.round(e.level * 100);
      _ev.charging = e.charging
      return _ev
    }

    if (!('getBattery' in navigator)) {
      element.dispatchEvent(create({
        level: 100,
        charging: true
      }));
      return
    }
    navigator.getBattery().then(battery => {
      element.dispatchEvent(create(battery))
      battery.onlevelchange = function(e) {
        element.dispatchEvent(create(e.target))
      }
      battery.onchargingchange = function(e) {
        element.dispatchEvent(create(e.target))
      }
    })
    return element;
  }
}

export class PhoneNetworkEvent extends PhoneEvent {
  constructor() {
    super('phone-network', { cancelable: false })
  }

  registerElement(element) {
    super.registerElement(element);

    function create(info) {
      var _ev = new PhoneNetworkEvent();
      _ev.name = info.type;
      _ev.type = info.effectiveType.replace('slow-2g', '2g').toUpperCase();
      _ev.mbps = (info.type != 'none') ? info.downlink : 0;
      _ev.saveData = info.saveData;
      _ev.online = (info.type != 'none') ? true : false;
      return _ev
    }

    var info = navigator.connection;
    if (!navigator.connection) {
      element.dispatchEvent(create({
        type: 'none',
        effectiveType: 'H',
        downlink: 0,
        saveData: false
      }));
      return;
    } else {
      navigator.connection.onchange = function() {
        if (info.type) {
          element.dispatchEvent(create(info))
        }
      }
      element.dispatchEvent(create(info))
    }
  }
}

export class PhoneLongClickEvent extends PhoneEvent {
  constructor() {
    super('phone-longclick', { bubbles: true })
  }

  registerElement(element) {
    var start = 0,
      end = 0,
      diff = 0,
      duration = 1000;
    var id = null;

    function handler(e) {
      if (e.type == 'pointerdown') {
        start = Date.now()
        id = setInterval(() => {
          end = Date.now();
          if (start) diff = end - start;
          if (diff >= duration) {
            var e = new PhoneLongClickEvent();
            e.start = start
            e.end = end
            e.duration = diff

            element.dispatchEvent(e);
            if (id) clearInterval(id);
          }
        })
      }
        if (e.type != 'pointerdown') {
          start = 0
          end = 0
          diff = 0
          if (id) clearInterval(id);
        }
      }
      element.addEventListener('pointerdown', handler);
      element.addEventListener('touchmove', handler);
      element.addEventListener('pointerup', handler);
    }
  }
