// ===============================
// CARRINHO
// ===============================
let carrinho = [];

// Elementos
const carrinhoContainer = document.getElementById("carrinho-container");
const iconeCarrinho = document.getElementById("icone-carrinho");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

// Abrir / fechar carrinho
iconeCarrinho.addEventListener("click", () => {
  carrinhoContainer.style.right = "0";
});

fecharCarrinho.addEventListener("click", () => {
  carrinhoContainer.style.right = "-400px";
});

// ===============================
// ADICIONAR AO CARRINHO
// ===============================
document.querySelectorAll(".btn-adicionar-carrinho").forEach(botao => {
  botao.addEventListener("click", () => {
    const carta = botao.closest(".carta");
    const nome = carta.querySelector(".nome-personagem").innerText;
    const preco = parseFloat(carta.dataset.preco);

    adicionarAoCarrinho(nome, preco);
  });
});

function adicionarAoCarrinho(nome, preco) {
  const itemExistente = carrinho.find(item => item.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      nome,
      preco,
      quantidade: 1
    });
  }

  atualizarCarrinho();
}

// ===============================
// ATUALIZAR CARRINHO
// ===============================
function atualizarCarrinho() {
  itensCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${item.nome}</strong><br>
        ${item.quantidade}x R$ ${item.preco.toFixed(2).replace(".", ",")}
      </div>
      <div>
        R$ ${subtotal.toFixed(2).replace(".", ",")}
        <button onclick="removerDoCarrinho(${index})">❌</button>
      </div>
    `;
    itensCarrinho.appendChild(li);
  });

  totalCarrinho.innerText = total.toFixed(2).replace(".", ",");
}

// ===============================
// REMOVER ITEM
// ===============================
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
