import { PhoneEvent } from './phone.js'

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