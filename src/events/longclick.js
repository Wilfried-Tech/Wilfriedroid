import { PhoneEvent } from './phone.js'

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