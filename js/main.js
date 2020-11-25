(function () {
  document.getElementById('toggle-box-checkbox').checked = false;
  toggleMode(false);
  if (JSON.parse(localStorage.getItem('dark'))) {
    document.getElementById('toggle-box-checkbox').checked = true;
    toggleMode(true);
  }
  if (document.querySelector('.greetings-message')) {
    const greetings = ['Hello', 'Hallo', 'Bonjour', 'Olá', 'Hola', 'Namaste', 'Nomoshkar', 'Konnichiwa', 'Ciao'];
    const random = Math.floor(Math.random() * greetings.length);
    document.querySelector('.greetings-message').innerHTML = greetings[random];
  }
})();

document.getElementById('toggle-box-checkbox').addEventListener('change', function () {
  const isChecked = this.checked;
  localStorage.setItem('dark', JSON.stringify(isChecked));
  toggleMode(isChecked);
});

function toggleMode(isDark) {
  if (isDark) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
}