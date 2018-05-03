class SecretCode {

	constructor(code, callback) {
		
		let entered = '';

		document.body.addEventListener('keyup', function (event) {
			console.log(event.key)
			entered += event.key

			console.log('code', code)
			console.log('entered', entered)

			if (entered.indexOf(code) !== -1) {
				console.log('match!')
				entered = ''
				callback()
			}
		})

	}
}