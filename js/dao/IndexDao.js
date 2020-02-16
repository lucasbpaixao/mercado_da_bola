class IndexDao{

    inicializaDB(){
        return new Promise((resolve, reject) => {
            Connection.inicializar().then(resolve());
        });
    }

    getJogadores(){
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                connection.transaction(transaction => {
                    transaction.executeSql('SELECT * FROM jogadores;', [], (t, result) => {

                        let jogadores = [];

                        for(let i = 0; i < result.rows.length; i++){
                            jogadores.push(result.rows[i]);
                        }

                        resolve(jogadores);
                    }, (t, e) => console.log(e));
                })
            });
        });
    }
}