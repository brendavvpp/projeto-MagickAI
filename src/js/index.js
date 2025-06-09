
 /* OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
    passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
*/
const botaoFiltrar = document.querySelector('.btn-filtrar');

//passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function () {
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    //passo 3 - pegar os valores dos campos de categoria e preço
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria; // const: variável
        const precoCarta = carta.dataset.preco;

        //passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
        let mostrarCarta = true; // let: valores booleanos

        const temFiltroDeCategoria = categoriaSelecionada !== '';
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase(); // coverte para minúsculo

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComPrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado) // converte para float

        if (temFiltroDePreco && cartaNaoBateComPrecoMaximo) {
            mostrarCarta = false;
        }
        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar'); // ad. '...' na classe no HTML
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    })
})