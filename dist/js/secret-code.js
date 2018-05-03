'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecretCode = function SecretCode(code, callback) {
	_classCallCheck(this, SecretCode);

	var entered = '';

	document.body.addEventListener('keyup', function (event) {
		console.log(event.key);
		entered += event.key;

		console.log('code', code);
		console.log('entered', entered);

		if (entered.indexOf(code) !== -1) {
			console.log('match!');
			entered = '';
			callback();
		}
	});
};
//# sourceMappingURL=secret-code.js.map
