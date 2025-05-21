const botoes = document.querySelectorAll(".compra")

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    alert("Produto foi adicionado ao carrinho!")
  })
})