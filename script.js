function trocarMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
}
  
document.getElementById('formulario').addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem');
  
  let formularioValido = true;
  
  if (!nome) {
    formularioValido = false;
  }
  
  if (!email.includes('@')) {
    formularioValido = false;
  }
  
  if (telefone.length < 10 || telefone.length > 11) {
    formularioValido = false;
  }
  
  if (formularioValido) {
    mensagem.textContent = 'Mensagem enviada com sucesso!';
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = 'Por favor, preencha corretamente os campos.';
    mensagem.style.color = 'red';
  }
}
