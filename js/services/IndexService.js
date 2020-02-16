class IndexService{

    constructor(){
        this._dao = new IndexDao();
        this._indexView = new IndexView();
    }

    inicializaDB(){
        return new Promise((resolve, reject) => {
            this._dao.inicializaDB().then(resolve());
        });
    }

    getJogadores(){
        return new Promise((resolve, reject) => {
            this._dao.getJogadores().then(jogadores => {

            });
        });
    }
}