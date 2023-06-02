"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./resizer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VerticalWrapper = function VerticalWrapper(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    "div",
    _extends({ className: "wrapper vertical" }, props),
    children
  );
};

var HorizontalWrapper = function HorizontalWrapper(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react2.default.createElement(
    "div",
    _extends({ className: "wrapper horizontal" }, props),
    children
  );
};

var Resizer = function (_Component) {
  _inherits(Resizer, _Component);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
  }

  _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          index = _props.index,
          _props$split = _props.split,
          split = _props$split === undefined ? "vertical" : _props$split,
          _props$onClick = _props.onClick,
          _onClick = _props$onClick === undefined ? function () {} : _props$onClick,
          _props$onDoubleClick = _props.onDoubleClick,
          _onDoubleClick = _props$onDoubleClick === undefined ? function () {} : _props$onDoubleClick,
          _props$onMouseDown = _props.onMouseDown,
          _onMouseDown = _props$onMouseDown === undefined ? function () {} : _props$onMouseDown,
          _props$onTouchEnd = _props.onTouchEnd,
          _onTouchEnd = _props$onTouchEnd === undefined ? function () {} : _props$onTouchEnd,
          _props$onTouchStart = _props.onTouchStart,
          _onTouchStart = _props$onTouchStart === undefined ? function () {} : _props$onTouchStart;

      var props = {
        ref: function ref(_) {
          return _this2.resizer = _;
        },
        "data-attribute": split,
        "data-type": "Resizer",
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event, index);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();
          _onTouchStart(event, index);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();
          _onTouchEnd(event, index);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();
            _onClick(event, index);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();
            _onDoubleClick(event, index);
          }
        }
      };

      return split === "vertical" ? _react2.default.createElement(VerticalWrapper, props) : _react2.default.createElement(HorizontalWrapper, props);
    }
  }]);

  return Resizer;
}(_react.Component);

exports.default = Resizer;
module.exports = exports["default"];