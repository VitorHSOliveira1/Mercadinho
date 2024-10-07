const botaoCompraAnaBrava = document.querySelector('#comprarAnaBrava');
const botaoComprarAnaFeliz = document.querySelector('#comprarAnaFeliz');
const botaoComprarAnaIndiferente = document.querySelector('#comprarAnaIndiferente');
const botaoComprarRiosBravo = document.querySelector('#comprarRiosBravo');
const botaoComprarRiosFeliz = document.querySelector('#comprarRiosFeliz');
const itensCarrinho = document.querySelector('.itens-carrinho');

function addAnaBrava() {
    const anaBravaHtml = `<div class="carrinho-item"><p>R$ 120.99</p> <h2>Ana Marcia brava</h2></div>`;
    itensCarrinho.insertAdjacentHTML('beforeend', anaBravaHtml);
}

function addAnaFeliz() {
    const anaFelizHtml = `<div class="carrinho-item"><p>R$ 50.99</p> <h2>Ana Marcia Feliz</h2></div>`;
    itensCarrinho.insertAdjacentHTML('beforeend', anaFelizHtml);
}

function addAnaIndiferente() {
    const anaIndiferenteHtml = `<div class="carrinho-item"><p>R$ 1.50</p> <h2>Ana Marcia Indiferente</h2></div>`;
    itensCarrinho.insertAdjacentHTML('beforeend', anaIndiferenteHtml);
}

function addRiosBravo() {
    const riosBravoHtml = `<div class="carrinho-item"><p>R$ 50.99</p> <h2>Rios Bravo</h2></div>`;
    itensCarrinho.insertAdjacentHTML('beforeend', riosBravoHtml);
}

function addRiosFeliz() {
    const riosFelizHtml = `<div class="carrinho-item"><p>R$ 79.99</p> <h2>Rios Feliz</h2></div>`;
    itensCarrinho.insertAdjacentHTML('beforeend', riosFelizHtml);
}

botaoCompraAnaBrava.addEventListener("click", addAnaBrava);
botaoComprarAnaFeliz.addEventListener("click", addAnaFeliz);
botaoComprarAnaIndiferente.addEventListener("click", addAnaIndiferente);
botaoComprarRiosBravo.addEventListener("click", addRiosBravo);
botaoComprarRiosFeliz.addEventListener("click", addRiosFeliz);