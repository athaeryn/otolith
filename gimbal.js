/*jslint browser: true */

(function() {
  "use strict";
  var _bind = function(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  };


  function Gimbal(options) {
    this.options = options;
    this.options.range = this.options.range || 180;
    this._handleOrientationChange = _bind(this._handleOrientationChange, this);
    this._calculatePercent = _bind(this._calculatePercent, this);
    this.axes = {
      x: 'gamma',
      y: 'beta',
      z: 'alpha'
    };

    window.addEventListener('deviceorientation', this._handleOrientationChange, false);
  }

  Gimbal.prototype._handleOrientationChange = function(e) {
    var percent = this._calculatePercent(e[this.axes[this.options.axis]]);
    this.options.callback(percent);
  };

  Gimbal.prototype._calculatePercent = function(raw) {
    return Gimbal._bounds(raw / this.options.range * 100);
  };

  Gimbal._bounds = function(percent) {
    return Math.floor(Math.max(-100, Math.min(100, percent)));
  };

  window.Gimbal = Gimbal;
}());
