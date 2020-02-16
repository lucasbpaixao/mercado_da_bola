class JogadorView{

    _templateJogador(jogador){
        return `
        <h1> ${jogador.nome} </h1>

            <div class="media">
                <img src="${jogador.link_imagem}" class="mr-3" alt="...">
                <div class="media-body" style="text-align: left;">
                    <h5 class="mt-0"></h5>
                    ${jogador.descricao}<br>
                    <br>
                    <p><b>Posicao:</b> ${jogador.posicao}</p>
                    <p><b>Time Atual:</b> ${jogador.time}</p>
                    <p><b>Valor:</b> R$ ${this.formataValor(jogador.valor)}</p>
                    <b>Conquistas</b>
                    <br>
                    ${jogador.conquistas.map(conquista => {
                        return `- ${conquista.conquista} <br>`;
                    })}
                    <br>
                    <div class="input-group mb-3" style="width: 200px">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                        <input type="text" id="inputValor" class="form-control" onkeyup="controller.analisaProposta(${jogador.valor})">
                        <div class="input-group-append">
                            <span class="input-group-text" id="status"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    updateJogador(jogador){

        console.log(jogador);
        let jogadorDiv = document.querySelector('#jogador');
        jogadorDiv.innerHTML = this._templateJogador(jogador).split(',').join('');
    }

    formataValor(valor){
        valor = '' + valor + ''; 
        
        let valorFormatado = valor.substring(0,3) + '.';
        valorFormatado += valor.substring(3,6) + '.';
        valorFormatado += valor.substring(6,9);

        return valorFormatado;
    }
}