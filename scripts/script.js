function gerarCard(){
    let produto = document.getElementById('nome_produto').value
    let preco = document.getElementById('price_product').value
    let cardProduct = document.getElementById('product')
    let cardPrice = document.getElementById('price')

    cardProduct.innerHTML = produto
    cardPrice.innerHTML = preco
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function(reg) {
            console.log('Service worker Registered');
        })
        .catch(function (err) {
            console.log('erro', err);
        });
}