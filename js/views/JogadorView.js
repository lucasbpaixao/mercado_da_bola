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
                    <p><b>Valor:</b> R$ ${jogador.valor}</p>
                    <b>Conquistas</b>
                    <br>
                    ${jogador.conquistas.map(conquista => {
                        return `- ${conquista.conquista} <br>`;
                    })}
                    <div class="input-group mb-3" style="width: 200px">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                        <input type="text" id="inputValor" class="form-control" onkeyup="controller.analisaProposta()">
                        <div class="input-group-append">
                            <span class="input-group-text">&#128545;</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    updateJogador(jogador){
        this._templateJogador(jogador);
    }
}