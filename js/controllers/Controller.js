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

    analisaProposta(valor){

        let input = document.querySelector('#inputValor');
        let proposta = valor - input.value;

        let status = document.querySelector('#status');

        let parent = status.parentNode;

        parent.removeChild(status);

        console.log(proposta);

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