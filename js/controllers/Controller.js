class Controller {

    constructor() {
        this._indexService = new IndexService();
    }

    iniciarIndex() {
        this._indexService.inicializaDB().then(() => {
            this._indexService.getJogadores().then();
        });
    }
}