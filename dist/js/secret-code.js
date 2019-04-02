"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecretCode =
/*#__PURE__*/
function () {
  function SecretCode(code, callback) {
    var _this = this;

    _classCallCheck(this, SecretCode);

    _defineProperty(this, "checkCode", function (event) {
      console.log(event.key);
      _this.entered += event.key;
      console.log('code', _this.code);
      console.log('entered', _this.entered);

      if (_this.entered.indexOf(_this.code) !== -1) {
        _this.codeMatches();
      }
    });

    document.body.addEventListener('keyup', this.checkCode);
    this.code = code;
    this.entered = '';
    this.callback = callback;
  }

  _createClass(SecretCode, [{
    key: "codeMatches",
    value: function codeMatches() {
      console.log('match!');
      this.entered = '';
      this.callback();
    }
  }]);

  return SecretCode;
}();
//# sourceMappingURL=secret-code.js.map
