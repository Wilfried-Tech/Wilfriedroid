import { merge } from '@src/utils'

const defaultInitDict = {
  composed: false,
  bubbles: false,
  cancelable: true
}

const registeredEvent = {};

export class PhoneEvent extends Event {
  constructor(name, eventInitDic) {
    super(name, merge(defaultInitDict, eventInitDic));
  }
  registerElement(element) {}
}


export function registerEvent(name, Class) {
  if (!(name in registeredEvent)) {
    registeredEvent[name] = Class;
  }
}

export function registerElementForEvent(ev,element) {
  if(ev.toLowerCase() in registeredEvent){
    new registeredEvent[ev.toLowerCase()]().registerElement(element);
  }
}
