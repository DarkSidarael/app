

var id = parseInt(localStorage.getItem('detalhe'));

var produtos = JSON.parse(localStorage.getItem('produtos'));

var item = produtos.find(produto => produto.id === id);

if(item){
    console.log('produto encotrado', item);

    $("#imagem-detalhe").attr('src', item.imagem);
    $("#nome-detalhe").html(item.nome);
    $("#rating-detalhe").html(item.rating);
    $("#like-detalhe").html(item.likes);
    $("#reviews-detalhe").html(item.reviews + ' reviews');
    $("#descricao-detalhe").html(item.descricao);
    $("#preco-detalhe").html('R$ '+ item.preco.toLocaleString('pt-BR', {Style: 'currency', currency:'BRL'}));
    $("#precopromo-detalhe").html('R$ '+ item.preco_promocional.toLocaleString('pt-BR', {Style: 'currency', currency:'BRL'}));

    var tabelaDetalhes = $("#tabdetalhes");

    item.detalhes.forEach(detalhe => {
        var linha = `
         <tr>
            <td>${detalhe.caracteristica}</td>
            <td>${detalhe.detalhes}</td>
        </tr>
    `;

        tabelaDetalhes.append(linha);

    });


} else {
    console.log('Produto não encontrado');
}


var carrinho= JSON.parse(localStorage.getItem('carrinho')) || [];

fuction adicionarAoCarrinho(item, quantidade){
    var itemNoCarrinho = carrinho.find(c=> c.item.id === item.id);

    if(itemCarrinho){
        itemNoCarrinho.quantidade += quantidade;
        itemNoCarrinho.total_item = itemNoCarrinho.quantidade * item.preco_promocional;
    }else{
        carrinho.push({
            item: item,
            quantidade: quantidade,
            total_item: quantidade * item.preco_promocional
        })
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

}

