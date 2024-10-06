
const botaoCompraAnaBrava = document.querySelector('#comprarAnaBrava');
const botaoComprarAnaFeliz = document.querySelector('#comprarAnaFeliz');
const botaoComprarAnaIndiferente = document.querySelector('#comprarAnaIndiferente');
const botaoComprarRiosBravo = document.querySelector('#comprarRiosBravo');
const botaoComprarRiosFeliz = document.querySelector('#comprarRiosFeliz');
const precoContainer = document.querySelector('#preco-carrinho')
const nomeContainer = document.querySelector('#nome-carrinho')
const imgContainer = document.querySelector('#img-carrinho')

const imgAnaBrava = document.createElement("img")
const imgAnaFeliz = document.createElement("img")
const imgAnaIndiferente = document.createElement("img")
const imgRiosBravo = document.createElement("img")
const imgRiosFeliz = document.createElement("img")
imgAnaBrava.src = "images/Ana-Bravinha.jpg"
imgAnaFeliz.src = "imgaes/Ana-Felizinha.jpg"
imgAnaIndiferente.src = "images/Ana-mehzinha.jpg"
imgRiosBravo.src = "images/Rios-bravinho.jpg"
imgRiosFeliz.src = "images/Rios-felizinho.jpg"


const carrinho = [];

function addToCarrinho(nome, preco, img) {
    const produto = {
        nome: nome,
        preco: preco,
        imagem: img
    };
    carrinho.push(produto); // Adiciona o objeto ao array
    console.log(carrinho); // Mostra o carrinho no console (para fins de teste)
    displayCartItems();
}

function displayCartItems() {
    const cartContainer = document.querySelector('.itens-carrinho');
    cartContainer.innerHTML = ''; // clear the container

    carrinho.forEach((item) => {
        const cartItemHTML =  
        cartContainer.innerHTML += cartItemHTML;
    });
}

// Associar os botões com a função de adicionar ao carrinho
// Associar os botões com a função de adicionar ao carrinho
botaoCompraAnaBrava.addEventListener("click", () => {
    addToCarrinho('Ana Brava', 120.99, );
    displayCartItems(); // call displayCartItems after adding to cart
});
botaoComprarAnaFeliz.addEventListener("click", () => {
    addToCarrinho('Ana Feliz', 110.50);
    displayCartItems();
});
botaoComprarAnaIndiferente.addEventListener("click", () => {
    addToCarrinho('Ana Indiferente', 115.00);
    displayCartItems();
});
botaoComprarRiosBravo.addEventListener("click", () => {
    addToCarrinho('Rios Bravo', 130.75);
    displayCartItems();
});
botaoComprarRiosFeliz.addEventListener("click", () => {
    addToCarrinho('Rios Feliz', 125.30);
    displayCartItems();
});

