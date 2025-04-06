document.addEventListener('DOMContentLoaded', function () {
  // pegando os items por id
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const sendButton = document.querySelector('.send-button');

  // validando se é um email válido usando regex
  function isValidEmail(email) {
    const formmat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formmat.test(email);
  }

  sendButton.addEventListener('click', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // alerts no caso de erro ao preencher o formulário
    if (!name) {
      alert('preencha o campo Nome.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('insira um e-mail válido.');
      return;
    }

    alert('Enviado com sucesso!!');
  });
});
