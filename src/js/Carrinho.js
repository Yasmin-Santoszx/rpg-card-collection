// Carrinho
let carrinho = [];
let total = 0;

// Abrir e fechar carrinho
const carrinhoContainer = document.getElementById("carrinho-container");
const iconeCarrinho = document.getElementById("icone-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");

iconeCarrinho.addEventListener("click", () => {
  carrinhoContainer.style.right = "0";
});
fecharCarrinho.addEventListener("click", () => {
  carrinhoContainer.style.right = "-400px";
});

// Adicionar ao carrinho
const botoesComprar = document.querySelectorAll(".bnt-comprar");
botoesComprar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const carta = botao.closest(".carta");
    const nome = carta.querySelector(".nome-personagem").innerText;
    const precoTexto = carta.querySelector(".preco").innerText;
    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));
    adicionarAoCarrinho(nome, preco);
  });
});

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itens-carrinho");
  const contador = document.getElementById("contador-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");

  // Atualiza lista
  itensCarrinho.innerHTML = "";
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}
      <button onclick="removerDoCarrinho(${index})">🗑️</button>
    `;
    itensCarrinho.appendChild(li);
  });

  // Atualiza contador e total
  contador.innerText = carrinho.length;
  totalCarrinho.innerText = total.toFixed(2).replace(".", ",");
}

function removerDoCarrinho(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
