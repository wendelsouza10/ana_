const btnSim = document.getElementById('btnSim');
const btnNao = document.getElementById('btnNao');
const wrongScreen = document.getElementById('wrongScreen');
const firstScreen = document.querySelector('.stage:not(.carousel-screen)');
const screenSemVoce = document.getElementById('screenSemVoce');
const screenNuvem = document.getElementById('screenNuvem');
const screenComVoce = document.getElementById('screenComVoce');
const screenSol = document.getElementById('screenSol');
const screenFinal = document.getElementById('screenFinal');
const btnToNuvem = document.getElementById('btnToNuvem');
const btnToComVoce = document.getElementById('btnToComVoce');
const btnToSol = document.getElementById('btnToSol');
const btnToFinal = document.getElementById('btnToFinal');

// Clicando em "Sim" -> mostra a tela de resposta errada
btnSim.addEventListener('click', () => {
  wrongScreen.classList.add('show');
});

// Tocar na tela de erro volta para a pergunta inicial (loop)
wrongScreen.addEventListener('click', () => {
  wrongScreen.classList.remove('show');
});

// Clicando em "Não, quero descobrir..." -> botão fica verde (mantendo o texto)
btnNao.addEventListener('click', () => {
  btnNao.classList.add('confirmed');
  btnSim.disabled = true;
  btnSim.style.opacity = '0.4';
  btnSim.style.pointerEvents = 'none';

  // Avança para a primeira tela do carrossel: "Meu dia sem você"
  setTimeout(() => {
    firstScreen.style.display = 'none';
    screenSemVoce.classList.add('show');
  }, 500);
});

// Tela 2 -> Tela 3 (imagem da nuvem)
btnToNuvem.addEventListener('click', () => {
  screenSemVoce.classList.remove('show');
  screenNuvem.classList.add('show');
});

// Tela 3 -> Tela 4 ("Meu dia com você")
btnToComVoce.addEventListener('click', () => {
  screenNuvem.classList.remove('show');
  screenComVoce.classList.add('show');
});

// Tela 4 -> Tela 5 (imagem do sol/flor)
btnToSol.addEventListener('click', () => {
  screenComVoce.classList.remove('show');
  screenSol.classList.add('show');
});

// Tela 5 -> Tela 6 (final)
btnToFinal.addEventListener('click', () => {
  screenSol.classList.remove('show');
  screenFinal.classList.add('show');
}); 