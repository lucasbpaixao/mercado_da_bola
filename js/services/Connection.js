class Connection {

    static getConnection() {
        return new Promise((resolve, reject) => {
            let db = openDatabase("mercado_da_bola_db", "1.0", "Mercado da Bola DB", 300000);
            resolve(db);
        });
    }

    static inicializar() {

        return new Promise((resolve, reject) => {
            this.getConnection().then(connection => {

                connection.transaction(transaction => {
                    transaction.executeSql('DROP TABLE IF EXISTS jogadores');
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS jogadores (id INTEGER PRIMARY KEY AUTOINCREMENT, nome varchar(255), idade int,posicao varchar(255), valor decimal(10,2), link_imagem varchar(255))');
    
                    transaction.executeSql('DROP TABLE IF EXISTS conquistas');
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS conquistas (id INTEGER PRIMARY KEY AUTOINCREMENT, conquista varchar(255), id_jogador int references jogadores(id))');
    
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS propostas (id INTEGER PRIMARY KEY AUTOINCREMENT, valor decimal(10,2), id_jogador int references jogadores(id))');
    
                    transaction.executeSql(`INSERT INTO jogadores (nome, idade, posicao, valor, link_imagem) VALUES 
                    ('Cristiano Ronaldo', 35, 'Atacante', 550000000, 'resources/imgs/cristiano_ronaldo.png'),
                    ('Neymar', 28, 'Atacante', 500000000, 'resources/imgs/neymar.jpg'),
                    ('Leonel Messi', 32, 'Atacante', 600000000, 'resources/imgs/leonel_messi.jpg')`,[],null, (t, error) => console.log(error));
    
                    transaction.executeSql(`INSERT INTO conquistas (conquista, id_jogador) VALUES 
                    ('5 Champions League', 1),
                    ('2 Campeonato Espanhol', 1),
                    ('3 Campeonato Inglês', 1),
                    ('1 Campeonato Italiano', 1),
                    ('1 Liga das Nações', 1),
                    ('5 Bola de ouro', 1),
                    ('1 Champions League', 2),
                    ('2 Campeonato Espanhol', 2),
                    ('2 Campeonato Frances', 2),
                    ('1 Libertadores', 2),
                    ('4 Champions League', 3),
                    ('10 Campeonato Espanhol', 3),
                    ('3 Mundial de clubes', 3),
                    ('6 Bola de ouro', 3)`,[],resolve(), (t, error) => console.log(error));
                });
            });
        });
    }
}