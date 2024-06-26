const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const timer = document.querySelector(".app__card-timer");
const timerBt = document.querySelector("#start-pause");
const image = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector("#alternar-musica");
// Utilizaremos o construtor "new Audio" e passaremos como parâmetro o caminho do áudio que se quer construir um objeto.
const musica = new Audio("/sons/luna-rise-part-one.mp3");
// Fazendo com que a música sempre reinicie depois de finalizada.
musica.loop = true;

let tempoDecorridoSegundos = 5;
let intervaloId = null;

// O método .addEventListener() funciona com a passagem de dois parâmetros: o tipo de evento que se quer associar ao elemento em questão e uma função callback - anônima ou a referência de uma função nominada - que executará algum comando quando o evento ocorrer.
focoBt.addEventListener("click", (e) => {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", (e) => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", (e) => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

// Para o caso deste escutador, utilizarei o evento "change", que é o tipo de evento utilizado para lidar com este tipo de input.
musicaFocoInput.addEventListener("change", () => {
  // Todo objeto construído por "new Audio" terá atributos e métodos específicos. Sendo assim, utiliza-lo-eis.
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

function alterarContexto(contexto) {
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });
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

const contagemRegressiva = () => {
  if (tempoDecorridoSegundos >= 0) {
    zerar();
    alert('Tempo finalizado"');
    return;
  }
  tempoDecorridoSegundos -= 1;
  console.log("Temporizador: ", tempoDecorridoSegundos);
};

// Como referenciarei a função contagemRegressiva no lugar da função de callback do escutador de evento - que é a mesma coisa só que de outra forma -, preciso declarar o escutador depois da função. Para funções declaradas no modelo "function declaration", não é necessário seguir esta regra.
timerBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    zerar();
    return;
  }
  // O método setInterval espera receber dois argumentos: a função que se quer executar e o tempo em que se quer que essa função seja executada, em milissegundos.
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
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

// O método .classList.toggle() realiza o trabalho de alternar uma classe em um elemento HTML. Se a classe não existir no elemento, ele a adiciona; se existir, ele a retira.

// O método .classList.contains() retorna um boloeano para caso a classe exista (true) ou para caso ela não exista (false).

// Os métodos .classList.add() e .classList.remove() fazem, respectivamente, a adição de uma classe à lista de classes ou a remoção desta classe da lista. Tem como adicionar ou remover mais de uma classe por vez, colocando-as todas separadas por vírgulas.

// Cada objeto construído de Audio, possui dois atributos que merecem destaque neste momento: currentTime e volume. O primeiro faz com que o audio avance até o tempo, em segundos, relativo ao valor atribuído; o segundo, por sua vez, varia de 0 a 1, sendo, por exemplo, 0.5 o ponto de meio do volume (50%).
