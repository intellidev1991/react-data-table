'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var MenuDownIcon = function MenuDownIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['color', 'size', 'children']);

  var className = 'mdi-icon ' + (props.className || '');

  return React.createElement(
    'svg',
    _extends({}, props, { className: className, width: size, height: size, fill: color, viewBox: '0 0 24 24' }),
    React.createElement('path', { d: 'M7,10L12,15L17,10H7Z' })
  );
};

var MenuDownIcon$1 = React.memo ? React.memo(MenuDownIcon) : MenuDownIcon;

module.exports = MenuDownIcon$1;
