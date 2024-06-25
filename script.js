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
  alterarContexto("foco");
});

curtoBt.addEventListener("click", (e) => {
  alterarContexto("descanso-curto");
});

longoBt.addEventListener("click", (e) => {
  alterarContexto("descanso-longo");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  image.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      title.innerHTML = `
    Otimize sua produtividade,<br />
    <strong class="app__title-strong">mergulhe no que importa.</strong>
    `;
      break;
    case "descanso-curto":
      // Usaremos o .innerHTML, que é uma propriedade de qualquer elemento HTML e se refere ao conteúdo que está entre as tags de abertura e fechamento do elemento. E sim, podemos passar outras tags HTML dentro do back-chick e inserir outros elementos dentro do referido elemento.
      title.innerHTML = `
      Que tal dar uma respirada?<br />
          <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;
    case "descanso-longo":
      title.innerHTML = `
        Hora de voltar à superfície.<br />
          <strong class="app__title-strong">Faça uma pausa longa.</strong>
          `;
      break;
    // O default aqui funcionará somente para casos em que o contexto não for igual a nenhuma das três opções acima. É colocado o break para parar a execução do switch case e não realizar processamentos.
    default:
      break;
  }
}
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

// O método .setAttribute espera receber dois parâmetros: o primeiro é o atributo que se quer modificar e o segundo é o novo valor deste atributo, todo em tipo string.

// O método .getAttribute retorna o valor de um atributo. O atributo que se quer obter o valor é passado como único argumento.

// O método .hasAttribute retorna um valor booleano quando passamos um determinado atributo como argumento, sendo true para o caso de ele existir no elemento ou false caso ele não exista.

// O método .removeAttribute remove um determinado atributo passado como argumento.
