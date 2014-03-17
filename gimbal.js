/*jslint browser: true */

(function(global) {
  "use strict";
  var _bind, _clamp;

  function Gimbal(options) {
    this._options = options || {};
    this._options.range = this._options.range || 180;
    this._options.raw = this._options.raw || false;

    // Look up the axis to use.
    this._axis = { x: 'gamma', y: 'beta', z: 'alpha' }[this._options.axis];

    // Ensure proper context is maintained.
    this.lock = _bind(this.lock, this);
    this.unlock = _bind(this.unlock, this);
    this._calculateValue = _bind(this._calculateValue, this);
    this._handleOrientationChange = _bind(this._handleOrientationChange, this);

    // Start the event listening.
    this.unlock();
  }


  Gimbal.prototype = {
    lock: function() {
      global.removeEventListener('deviceorientation', this._handleOrientationChange, false);
    },
    unlock: function() {
      global.addEventListener('deviceorientation', this._handleOrientationChange, false);
    },
    _handleOrientationChange: function(e) {
      var raw = e[this._axis];
      this._options.callback(
        this._options.raw ? raw : this._calculateValue(raw)
      );
    },
    _calculateValue: function(raw) {
      return _clamp((raw / this._options.range), -1, 1);
    }
  };


  _bind = function(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  };
  _clamp = function(val, min, max) {
    return Math.max(min, Math.min(max, val));
  };

  global.Gimbal = Gimbal;
}(window));
