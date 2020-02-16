class Controller {

    constructor() {
        this._indexService = new IndexService();
    }

    iniciarIndex() {
        this._indexService.inicializaDB().then(() => {
            this._indexService.getJogadores().then();
        });
    }

    descJogador(){
        this._indexService.descJogador();
    }

    enviarProposta(valor){
        this._indexService.enviarProposta(valor);
    }

    analisaProposta(valor){
        this._indexService.analisaProposta(valor);
        
    }
}