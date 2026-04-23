const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("ativo");
});

function calcular() {
  const tamanho = document.getElementById("tamanho").value;
  const tipo = document.getElementById("tipo").value;

  const valor = tamanho * tipo;

  document.getElementById("resultado").innerText =
    "Valor estimado: R$ " + valor;
}