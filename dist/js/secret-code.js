'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecretCode = function () {
	function SecretCode(code, callback) {
		_classCallCheck(this, SecretCode);

		document.body.addEventListener('keyup', this.checkCode.bind(this));
		this.code = code;
		this.entered = '';
		this.callback = callback;
	}

	_createClass(SecretCode, [{
		key: 'checkCode',
		value: function checkCode(event) {
			console.log(event.key);
			this.entered += event.key;

			console.log('code', this.code);
			console.log('entered', this.entered);

			if (this.entered.indexOf(this.code) !== -1) {
				this.codeMatches();
			}
		}
	}, {
		key: 'codeMatches',
		value: function codeMatches() {
			console.log('match!');
			this.entered = '';
			this.callback();
		}
	}]);

	return SecretCode;
}();
//# sourceMappingURL=secret-code.js.map
