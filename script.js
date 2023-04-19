var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let aniMais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
let cont = document.querySelector('div#container');
// Selecionar elemento 'nome' ( 1 ponto)
let nome = document.querySelector('p#nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
aniMais.addEventListener('input', listarAnimais)
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
cont.addEventListener('mouseover', mostrarNome)
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
cont.addEventListener('mouseout', limparNome)
function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  if (aniMais.value == 'cat') {
    for (i = 0; i < gatos.length; i++) {
      let boxImg = document.createElement('img');
      boxImg.src = `img/${gatos[i].imagem}.jpg`
      boxImg.id = gatos[i].nome
      cont.appendChild(boxImg);
    }

  } else {
    for (i = 0; i < cachorros.length; i++) {
      let boxImg = document.createElement('img');
      boxImg.src = `img/${cachorros[i].imagem}.jpg`
      boxImg.id = cachorros[i].nome
      cont.appendChild(boxImg);

    }
  }
}
  // Implementar...
  // Criar elementos do tipo <img src=./img/....

  // Fazer com que os elementos img sejam filhos do elemento 'container'


  function mostrarNome(e) { // Implementação da função (4 pontos)
    // Implementar...
    nome.innerText = e.target.id;
  }

  function limparNome() {
    p.innerText = "";
  }

  // Função para limpar as imagens antigas, antes de inserir novas imagens
  function limparDivContainer() {
    var elemento = document.querySelector("#container");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }