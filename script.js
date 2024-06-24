const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const timer = document.querySelector(".app__card-timer");
const timerBt = document.querySelector("#start-pause");
const image = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const focoTempo = 1500;
const curtoTempo = 300;
const longoTempo = 900;

// O método .addEventListener() funciona com a passagem de dois parâmetros: o tipo de evento que se quer associar ao elemento em questão e uma função callback - anônima ou a referência de uma função nominada - que executará algum comando quando o evento ocorrer.
focoBt.addEventListener("click", (e) => {
  // O método .setAttribute espera receber dois parâmetros: o primeiro é o atributo que se quer modificar e o segundo é o novo valor deste atributo, todo em tipo string.
  html.setAttribute("data-contexto", "foco");
  image.setAttribute("src", "/imagens/foco.png");
});

curtoBt.addEventListener("click", (e) => {
  html.setAttribute("data-contexto", "descanso-curto");
  image.setAttribute("src", "/imagens/descanso-curto.png");
});

longoBt.addEventListener("click", (e) => {
  html.setAttribute("data-contexto", "descanso-longo");
  image.setAttribute("src", "/imagens/descanso-longo.png");
});

// DOM (Document Object Model) é uma forma padronizada de representar e interagir com elementos em documentos HTML e XML. Sua estrutura representa um documento em formato de árvore de elementos, em que cada elemento representa uma parte do documento.

/**
 * Alguns dos tipos de eventos mais comuns:
 * - submit: para envio de formulários;
 * - keydown: momento em que uma tecla é pressionada;
 * - keyup: momento em que uma tecla pressionada é liberada;
 * - keypress: momento em que uma tecla está sendo pressionada e não liberada;
 * - focus: quando um elemento está sendo selecionado;
 * - blur: quando um elemento não está mais sendo selecionado.
 */

// O método .getAttribute retorna o valor de um atributo. O atributo que se quer obter o valor é passado como único argumento.

// O método .hasAttribute retorna um valor booleano quando passamos um determinado atributo como argumento, sendo true para o caso de ele existir no elemento ou false caso ele não exista.

// O método .removeAttribute remove um determinado atributo passado como argumento.
