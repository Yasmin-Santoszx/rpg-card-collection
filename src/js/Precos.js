
document.addEventListener('DOMContentLoaded', function () {
  const precoInput = document.getElementById('preco');

  precoInput.addEventListener('input', function () {
    let value = precoInput.value.replace(/\D/g, '');

    if (value) {
      value = (parseInt(value, 10) / 100).toFixed(2);
      precoInput.value = formatarParaReal(value);
    } else {
      precoInput.value = '';
    }
  });

  function formatarParaReal(valor) {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(valor);
  }
});
