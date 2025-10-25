
document.getElementById('btn-resetar').addEventListener('click', function () {
  const cartas = document.querySelectorAll('.carta');
  const mensagemErro = document.getElementById('mensagem-erro');
  const categoriaSelect = document.getElementById('categoria');
  const precoInput = document.getElementById('preco');

  categoriaSelect.value = '';
  precoInput.value = '';

  cartas.forEach(carta => {
    carta.style.display = 'block';
  });

  mensagemErro.style.display = 'none';
});