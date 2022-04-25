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