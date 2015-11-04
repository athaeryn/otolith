# Otolith

[Otolith](https://en.wikipedia.org/wiki/Otolith) lets you control things by
tilting your device.


## Usage

To use Otolith, tell it which axis you want to listen to, give it a
callback, and watch it go! Otolith only allows rotation on one axis, but
there's nothing stopping you setting up more than one.

```js
if (window.DeviceOrientationEvent) {
  otolith = new Otolith({
    axis: 'x',
    callback: function (val) { /* */ }
  );
}
```

The value passed to the callback is a number in the range [-1,1] representing
the current point through the rotation.

If you wish, you may stop your callback being called, either temporarily or
permanently. You can use the `start` and `stop` functions to stop your
callback being called.


## Options

### axis

__(required)__

The axis you want to watch. Can be `'x'`, `'y'`, or `'z'`.


### callback

__(required)__

Will be called a lot. Be prepared.


### range

_(optional)_

```js
otolith = new Otolith({
  axis: 'x',
  callback: function (val) { /* */ }
  range: 35
});
```

This will map the extremes of the value passed to your callback to a smaller
range of rotation. For instance, if you pass a range of 35, any degree of
rotation greater than 35&deg; will produce a value of 1. This works in the
negative direction as well.

