"use strict";

new SecretCode('abcd', function () {
  console.log('fireworks!');
  document.body.style.background = "red";
  document.body.style.color = "white";
  document.body.style.fontSize = "5em";
  document.body.innerText = 'secret code entered!';
});
//# sourceMappingURL=main.js.map
