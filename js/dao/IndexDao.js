class IndexDao {

    inicializaDB() {
        return new Promise((resolve, reject) => {
            Connection.inicializar().then(resolve());
        });
    }

    getJogadores() {
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                connection.transaction(transaction => {
                    transaction.executeSql('SELECT * FROM jogadores;', [], (t, result) => {

                        let jogadores = [];

                        for (let i = 0; i < result.rows.length; i++) {
                            jogadores.push(result.rows[i]);
                        }

                        resolve(jogadores);
                    }, (t, e) => console.log(e));
                })
            });
        });
    }

    enviarProposta(valor, id) {
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                connection.transaction(transaction => {
                    transaction.executeSql('INSERT INTO propostas (valor, id_jogador) VALUES (?,?)', [valor, id], (t, result) => {
                        resolve();
                    });
                });
            });
        });
    }

    getJogador(id) {
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                connection.transaction(transaction => {
                    transaction.executeSql('SELECT * FROM jogadores where id = ?;', [id], (t, resultJogador) => {

                        transaction.executeSql('SELECT * FROM conquistas where id_jogador = ?;', [id], (t, resultConquistas) => {
                            transaction.executeSql('SELECT * FROM descricao where id_jogador = ?;', [id], (t, resultDescricao) => {

                                let jogador = resultJogador.rows[0];
                                jogador["conquistas"] = [];

                                for (let i = 0; i < resultConquistas.rows.length; i++) {

                                    jogador["conquistas"].push(resultConquistas.rows[i]);
                                }

                                jogador["descricao"] = resultDescricao.rows[0].descricao;

                                resolve(jogador);
                            });
                        });

                    }, (t, e) => console.log(e));
                })
            });
        });
    }
}