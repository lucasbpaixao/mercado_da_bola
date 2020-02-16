class Connection {

    static getConnection() {
        return new Promise((resolve, reject) => {
            let db = openDatabase("mercado_da_bola_db", "1.0", "Mercado da Bola DB", 300000);
            resolve(db);
        });
    }

    inicializar() {
        this.getConnection().then(connection => {

            connection.transaction(transaction => {
                transaction.executeSql('DROP TABLE IF EXISTS jogadores');
                transaction.executeSql('CREATE TABLE IF NOT EXISTS jogadores (id INTEGER PRIMARY KEY AUTOINCREMENT, nome varchar(255), idade int, valor decimal(10,2))');

                transaction.executeSql('DROP TABLE IF EXISTS conquistas');
                transaction.executeSql('CREATE TABLE IF NOT EXISTS conquistas (id INTEGER PRIMARY KEY AUTOINCREMENT, conquista varchar(255), ano int, id_jogador int references jogadores(id))');
            });
        });
    }
}