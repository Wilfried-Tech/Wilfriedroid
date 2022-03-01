import * as Utils from './Utils.js'
import * as Events from './Events.js'
import Android from './Android.js'

window.System = {
  Android,
  Utils,
  Events,
  getView: Utils.getView,
  getViewGroup: Utils.getViewGroup
};
