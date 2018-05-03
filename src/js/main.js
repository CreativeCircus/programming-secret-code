console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

new SecretCode('abcd', function() {
	document.body.style.background = "red";
	document.body.style.color = "white";
	document.body.style.fontSize = "5em";
	document.body.innerText = 'secret code entered!';
})