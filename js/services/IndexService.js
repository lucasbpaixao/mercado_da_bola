class IndexService{

    constructor(){
        this._dao = new IndexDao();
        this._indexView = new IndexView();
        this._jogadorView = new JogadorView();
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

}