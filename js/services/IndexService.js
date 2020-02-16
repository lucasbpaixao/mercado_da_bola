class IndexService{

    constructor(){
        this._dao = new IndexDao();
        this._indexView = new IndexView();
        this._jogadorView = new JogadorView();
        this._mensagemView = new MensagemView();
    }

    inicializaDB(){
        return new Promise((resolve, reject) => {
            this._dao.inicializaDB().then(resolve());
        });
    }

    getJogadores(){
        return new Promise((resolve, reject) => {
            this._dao.getJogadores().then(jogadores => {
                this._indexView.updateCards(jogadores);
            });
        });
    }

    descJogador(){
        let id = location.search.slice(1).replace('id=', '');

        this._dao.getJogador(id).then(jogador => {
            this._jogadorView.updateJogador(jogador);
        });
    }

    enviarProposta(valor){
        let id = location.search.slice(1).replace('id=', '');
        this._dao.enviarProposta(valor, id).then(() => {
            this._mensagemView.update('Proposta enviada com sucesso', 'sucesso')
        });
    }

    analisaProposta(valor){
        let input = document.querySelector('#inputValor');
        let proposta = valor - input.value;

        let status = document.querySelector('#status');

        let parent = status.parentNode;

        parent.removeChild(status);

        if(proposta > 15000000 && proposta > 0){
            parent.innerHTML = `<span class="input-group-text" id="status">&#128545;</span>`;
        }else{
            parent.innerHTML = `<span class="input-group-text" id="status">&#128544;</span>`;
        }

        if(proposta == 0 || proposta >= -1000000 && proposta < 0){
            parent.innerHTML = `<span class="input-group-text" id="status">&#128528;</span>`;
        }

        if(proposta <= -1000000){
            parent.innerHTML = `<span class="input-group-text" id="status">&#128533;</span>`;
        } 

        if(proposta <= -100000000){
            parent.innerHTML = `<span class="input-group-text" id="status">&#128516;</span>`;
        } 
    }

}