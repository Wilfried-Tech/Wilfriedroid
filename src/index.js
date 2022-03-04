import * as Utils from './Utils.js'
import * as Events from './Events.js'
import Android from './Android.js'
import View from './View.js'
import OffScreen from './Components/OffScreen/OffScreen.js'

window.System = {
  Android,
  View,
  Components: {
    OffScreen
  },
  Utils,
  Events,
  getView: Utils.getView,
  getViewGroup: Utils.getViewGroup
};
