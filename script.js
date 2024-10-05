const botaoCompraAnaBrava = document.getElementById('comprarAnaBrava');
const botaoComprarAnaFeliz = document.getElementById('comprarAnaFeliz');
const botaoComprarAnaIndiferente = document.getElementById('comprarAnaIndiferente');
const botaoComprarRiosBravo = document.getElementById('comprarRiosBravo');
const botaoComprarRiosFeliz = document.getElementById('comprarRiosFeliz');

const carrinho = [];

function addToCarrinho(nome, preco) {
    const produto = {
        nome: nome,
        preco: preco
    };
    carrinho.push(produto); // Adiciona o objeto ao array
    console.log(carrinho); // Mostra o carrinho no console (para fins de teste)
    displayCartItems();
}

function displayCartItems() {
    const cartContainer = document.querySelector('.itens-carrinho');
    cartContainer.innerHTML = ''; // clear the container

    carrinho.forEach((item) => {
        const cartItemHTML = `
            <div>
                <h2>${item.nome}</h2>
                <p>Preço: ${item.preco} R$</p>
                
            </div>
        `;
        cartContainer.innerHTML += cartItemHTML;
    });
}

// Associar os botões com a função de adicionar ao carrinho
// Associar os botões com a função de adicionar ao carrinho
botaoCompraAnaBrava.addEventListener("click", () => {
    addToCarrinho('Ana Brava', 120.99);
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
