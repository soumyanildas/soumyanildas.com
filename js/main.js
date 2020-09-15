(function () {
  const greetings = ['Hello', 'Hallo', 'Bonjour', 'Olá', 'Hola', 'Namaste', 'Nomoshkar', 'Konnichiwa', 'Ciao'];
  const random = Math.floor(Math.random() * greetings.length);
  document.querySelector('.greetings-message').innerHTML = greetings[random];
})();