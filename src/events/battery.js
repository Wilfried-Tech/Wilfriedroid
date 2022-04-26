import { PhoneEvent,registerEvent } from './phone.js'

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

registerEvent('phone-battery',PhoneBatteryEvent);