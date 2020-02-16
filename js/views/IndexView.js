class IndexView{
    
    _templateCards(jogadores){
        return `
        <div class="card-deck">
            ${jogadores.map(jogador => {
                return `            
                <div class="card mt-5">
                    <img src="${jogador.link_imagem}" width="200" height="200" class="card-img-top" >
                    <div class="card-body">
                         <h5 class="card-title">${jogador.nome}</h5>
                        <p class="card-text">Posição: ${jogador.posicao} <br>
                                             Idade: ${jogador.idade} <br>
                                             Time: ${jogador.time}<br>
                                             Valor: R$ ${this.formataValor(jogador.valor)}<br>
                         </p>
                            <a href="jogador.html?id=1" class="btn btn-primary">Fazer uma Proposta</a>
                    </div>
                </div>`;
            })}

      </div>
        `;
    }

    updateCards(jogadores){
        let cards = document.querySelector('#cards');

        cards.innerHTML = this._templateCards(jogadores).split(',').join('');
    }

    formataValor(valor){
        valor = '' + valor + ''; 
        
        let valorFormatado = valor.substring(0,3) + '.';
        valorFormatado += valor.substring(3,6) + '.';
        valorFormatado += valor.substring(6,9);

        return valorFormatado;
    }
}