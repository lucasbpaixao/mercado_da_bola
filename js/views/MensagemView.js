class MensagemView {


  _template(mensagem, tipo) {

    if (tipo == 'sucesso') {
      return `
            <div class="alert alert-success" role="alert">
                ${mensagem}
            </div>`;
    }
  }

  update(mensagem, tipo) {
    let elemento = document.querySelector('#alertas');
    elemento.innerHTML = this._template(mensagem, tipo);
  }

  clean() {
    this._elemento.innerHTML = '';
  }
}