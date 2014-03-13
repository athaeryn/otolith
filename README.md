# gimbal.js

Gimbal.js helps you move things as you tilt your device. Tell it which axis you
want to listen to, give it a callback, and watch it go!

Note: you should not set up Gimbal if `window.DeviceOrientation` is undefined.

## Use it

```js
var gimbal = new Gimbal({
  axis: 'x',
  handler: gimbalHandler
});
```
