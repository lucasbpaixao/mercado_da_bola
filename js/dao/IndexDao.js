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
                        resolve(result.rows);
                    }, (t, e) => console.log(e));
                })
            });
        });
    }
}