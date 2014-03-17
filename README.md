# Gimbal.js

Gimbal.js lets you control things by tilting your device.


## Usage

To use Gimbal.js, tell it which axis you want to listen to, give it a
callback, and watch it go! Gimbal.js only allows rotation on one axis, just
like a [real gimbal](http://en.wikipedia.org/wiki/Gimbal), but there's nothing
stopping you setting up more than one.

```js
if (window.DeviceOrientationEvent) {
  gimbal = new Gimbal({
    axis: 'x',
    callback: function (val) {
      console.log(val);
    }
  );
}
```

The value passed to the callback is a number in the range [-1,1] representing
the current point through the rotation.

If you wish, you may stop your callback being called, either temporarily or
permanently. You can "pause" the gimbal with the `lock` function, and "unpause"
it with the `unlock` function. Don't worry, [gimbal
lock](http://en.wikipedia.org/wiki/Gimbal_lock) isn't an issue.


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
gimbal = new Gimbal({
  axis: 'y',
  callback: gimbalCallback,
  range: 35
});
```

This will map the extremes of the value passed to your callback to a smaller
range of rotation. For instance, if you pass a range of 35, any degree of
rotation greater than 35&deg; will produce a value of 1. This works in the
negative direction as well.


### raw

_(optional)_

If you'd rather receive the raw data from the event, you can pass the `raw`
option:

```js
gimbal = new Gimbal({
  axis: 'y',
  callback: gimbalCallback,
  raw: true
});
```

When this option is set, the value given to the callback will be a number in
the range [-180,180].
