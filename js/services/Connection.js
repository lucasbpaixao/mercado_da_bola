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
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS jogadores (id INTEGER PRIMARY KEY AUTOINCREMENT, nome varchar(255), idade int, posicao varchar(255), time varchar(255), valor decimal(10,2), link_imagem varchar(255))');
    
                    transaction.executeSql('DROP TABLE IF EXISTS conquistas');
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS conquistas (id INTEGER PRIMARY KEY AUTOINCREMENT, conquista varchar(255), id_jogador int references jogadores(id))');

                    transaction.executeSql('DROP TABLE IF EXISTS descricao');
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS descricao (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, id_jogador int references jogadores(id))');
    
                    transaction.executeSql('CREATE TABLE IF NOT EXISTS propostas (id INTEGER PRIMARY KEY AUTOINCREMENT, valor decimal(10,2), id_jogador int references jogadores(id))');
    
                    transaction.executeSql(`INSERT INTO jogadores (nome, idade, posicao, time, valor, link_imagem) VALUES 
                    ('Cristiano Ronaldo', 35, 'Atacante', 'Juventus FC', 550000000, 'resources/imgs/cristiano_ronaldo.png'),
                    ('Neymar', 28, 'Atacante', 'Paris Saint-Germain FC', 500000000, 'resources/imgs/neymar.jpg'),
                    ('Lionel Messi', 32, 'Atacante', 'FC Barcelona', 600000000, 'resources/imgs/lionel_messi.jpg')`,[],null, (t, error) => console.log(error));
    
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

                    transaction.executeSql(`INSERT INTO descricao (descricao, id_jogador) VALUES 
                    ('Frequentemente considerado como um dos melhores e mais completos jogadores do mundo e de todos os tempos, sendo comparado aos grandes nomes da historia do futebol como Pelé, Maradona, Di Stéfano, Eusébio, Gerd Müller e Marco van Basten.',  1),
                    ('Revelado pelo Santos, em 2009, Neymar se tornou o principal futebolista em atividade no país.<br> Em 2013, foi vendido ao Barcelona em alta, após ser protagonista da conquista da Copa das Confederações FIFA 2013 pela Seleção Brasileira.',  2),
                    ('Frequentemente considerado o melhor jogador do mundo e amplamente considerado um dos melhores jogadores de todos os tempos.<br> Messi possui um recorde de seis prêmios Ballon d or/Melhor Jogador do Mundo da FIFA, quatro dos quais ele ganhou consecutivamente e um recorde de seis Chuteiras de Ouro.',  3)`
                    ,[],resolve(), (t, error) => console.log(error));
                });
            });
        });
    }
}