var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM respostas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO respostas (resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7,resposta8,resposta9,resposta10,resposta11,resposta12,resposta13,resposta14,resposta15,resultado,fkUsuario) VALUES ('${resposta1}','${resposta2}', '${resposta3}', '${resposta4}', '${resposta5}', '${resposta6}', '${resposta7}', '${resposta8}', '${resposta9}', '${resposta10}', '${resposta11}', '${resposta12}', '${resposta13}', '${resposta14}', '${resposta15}', '${resultado}', '${fkUsuario}',);
    `; // criar uma rota get no usuario para pegar o id dele
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};