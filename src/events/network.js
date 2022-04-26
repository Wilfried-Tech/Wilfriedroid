import { PhoneEvent,registerEvent } from './phone.js'

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

registerEvent('phone-network',PhoneNetworkEvent);