"use strict"

function Otolith (options) {
  this._options = options || {}
  this._options.axis = this._options.axis || 'x'
  this._options.range = this._options.range || 180

  // Look up the axis to use.
  this._axis = { x: 'gamma', y: 'beta', z: 'alpha' }[this._options.axis]

  this._handleOrientationChange = this._handleOrientationChange.bind(this)

  // Start the event listening.
  this.start()
}

Otolith.prototype = {
  stop: function () {
    window.removeEventListener(
      'deviceorientation',
      this._handleOrientationChange,
      false
    )
  },

  start: function () {
    window.addEventListener(
      'deviceorientation',
      this._handleOrientationChange,
      false
    )
  },

  _handleOrientationChange: function (e) {
    this._options.callback(this._calculateValue(e[this._axis]))
  },

  _calculateValue: function (raw) {
    return _clamp((raw / this._options.range), -1, 1)
  }
}

function _clamp (val, min, max) {
  return Math.max(min, Math.min(max, val))
}

module.exports = Otolith

