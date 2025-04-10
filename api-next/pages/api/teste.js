import mysql from 'mysql2';
 
// conexao com o banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdEscola'
});
 
// O que sera retornado na rota /api/teste
export default function handle(req, res) {
    /* Query que retorna um erro e resultado
    e roda uma função para lidar com eles*/
    connection.query('SELECT * FROM tbaluno', (error, results) => {
        // Lidando com o erro
        if (error) {
            console.error('Erro na consulta', error);
            return res.status(500).json({error: 'Erro ao buscar dados'});
        }
        // Lidando com o resultado
        res.status(200).json(results);
    })
}
 