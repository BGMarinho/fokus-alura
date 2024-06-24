const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
// const longoBt = document.querySelector(".app__card-button--longo");

focoBt.addEventListener("click", (e) => {
  // O método .setAttribute espera receber dois parâmetros: o primeiro é o atributo que se quer modificar e o segundo é o novo valor deste atributo, todo em tipo string.
  html.setAttribute("data-contexto", "foco");
});

curtoBt.addEventListener("click", (e) => {
  html.setAttribute("data-contexto", "descanso-curto");
});
