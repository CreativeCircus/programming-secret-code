class SecretCode {
	constructor(code, callback) {
		document.body.addEventListener('keyup', this.checkCode.bind(this))
		this.code = code;
		this.entered = '';
		this.callback = callback;
	}


	checkCode(event) {
		console.log(event.key)
		this.entered += event.key

		console.log('code', this.code)
		console.log('entered', this.entered)

		if (this.entered.indexOf(this.code) !== -1) {
			this.codeMatches();
		}
	}

	codeMatches() {
		console.log('match!')
		this.entered = ''
		this.callback()
	}
}