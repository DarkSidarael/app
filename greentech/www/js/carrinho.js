var localCarrinho = localStorage.getItem('carrinho');

if(localCarrinho){
    var carrinho = JSON.parse(localCarrinho);
    if(carrinho.length >0){


    }else{
        carrinhoVazio();
    }
}else{
    carrinhoVazio();
}

function renderizarCarrinho(){
    $('#listaCarrinho').empty();

    $.each(carrinho, funcition(index, itemCarrinho){
        var itemDiv = `
        <div class="item-carrinho">
        <div class="area-img">
            <img src="img/default.png">
        </div>
        <div class="area-details">
            <div class="sup">
                <span class="name-prod">
                    Xbox Series X 
                </span>
                <a class="delete" href="#"><i class="mdi mdi-close"></i></a>
            </div>
            <div class="middle">
                <span>1 TB </span>
            </div>
            <div class="preco-quantidade">
                <span>R$ 99.500</span>
                <div class="count">
                    <a class="minus" href="#">-</a>
                    <input readonly class="qtd-item" type="text" value="1">
                    <a class="plus" href="#">+</a>
                </div>
            </div>
        </div>
    </div>
        `;
    });

}

function carrinhoVazio(){
    console.log('Carrinho está vazio');
    $("#listaCarrinho").empty();

    $("#toolbarTotais").addClass('display-none');
    $("#toolbarCheckout").addClass('display-none');

    $("#listaCarrinho").html(`
        <div class="text-align-center">
            <img width="300" src="img/empty.gif">
            <br><span class="color-gray">Nada por enquanto...</span>
        </div>
    `)

}

$("#esvaziar").on('click', function(){
    app.dialog.confirm('Tem certeza que quer esvaziar o carrinho?', 'ESVAZIAR CARRINHO', function(){
        localStorage.removeItem('carrinho');
        app.views.main.router.refreshPage();
    })
})