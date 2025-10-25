document.getElementById('btn-filtrar').addEventListener('click', function () {
  const categoriaSelecionada = document.getElementById('categoria').value;
  const precoMaximo = parseFloat(document.getElementById('preco').value.replace(/\./g, '').replace(',', '.'));

  const cartas = document.querySelectorAll('.carta');

  let cartasVisiveis = 0;

  cartas.forEach(carta => {
    const categoriaCarta = carta.getAttribute('data-categoria').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const categoriaFiltro = categoriaSelecionada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const precoCarta = parseFloat(carta.getAttribute('data-preco'));

    const categoriaValida = categoriaSelecionada === '' || categoriaCarta.toLowerCase() === categoriaFiltro.toLowerCase();
    const precoValido = isNaN(precoMaximo) || precoCarta <= precoMaximo;

    if (categoriaValida && precoValido) {
      carta.style.display = 'block';
      cartasVisiveis++;
    } else {
      carta.style.display = 'none';
    }
  });

  const mensagemErro = document.getElementById('mensagem-erro');

if (cartasVisiveis === 0) {
  mensagemErro.style.display = 'block';

  setTimeout(() => {

    cartas.forEach(carta => {
      carta.style.display = 'block';
    });
  
    document.getElementById('categoria').value = '';
    document.getElementById('preco').value = '';

    mensagemErro.style.display = 'none';
  }, 2500); 

} else {
  mensagemErro.style.display = 'none';

}});
