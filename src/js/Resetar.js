document.addEventListener("DOMContentLoaded", () => {
  const btnLimpar = document.getElementById("btn-limpar");

  const selectCategoria = document.getElementById("categoria");
  const inputPreco = document.getElementById("preco");

  const containerCartas = document.querySelector(".cartas");
  const cartas = Array.from(containerCartas.children);

  const mensagemErro = document.getElementById("mensagem-erro");

  // Guarda a ordem original das cartas
  cartas.forEach((carta, index) => {
    carta.dataset.ordemOriginal = index;
  });

  btnLimpar.addEventListener("click", () => {

    /* 1️⃣ Resetar filtros */
    selectCategoria.selectedIndex = 0;
    inputPreco.value = "";

    // Se o seu filtro usa botão "Aplicar", não precisa disparar eventos
    // Caso use change/input em outro JS, isso ajuda:
    selectCategoria.dispatchEvent(new Event("change"));
    inputPreco.dispatchEvent(new Event("input"));

    /* 2️⃣ Esconder mensagem de erro */
    if (mensagemErro) {
      mensagemErro.style.display = "none";
    }

    /* 3️⃣ Mostrar todas as cartas */
    cartas.forEach(carta => {
      carta.style.display = "block";
    });

    /* 4️⃣ Restaurar ordem original */
    cartas
      .sort((a, b) => a.dataset.ordemOriginal - b.dataset.ordemOriginal)
      .forEach(carta => containerCartas.appendChild(carta));
  });
});
