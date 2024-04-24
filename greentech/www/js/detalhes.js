

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

