var database = require("../database/config")

function listar(fkUsuario) {
    var instrucao = `
        SELECT * FROM respostas WHERE respostas.id = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12, resposta13, resposta14, resposta15, resultado, fkUsuario) {
    var instrucao = `
        INSERT INTO respostas (resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7,resposta8,resposta9,resposta10,resposta11,resposta12,resposta13,resposta14,resposta15,resultado,fkUsuario) VALUES ('${resposta1}','${resposta2}', '${resposta3}', '${resposta4}', '${resposta5}', '${resposta6}', '${resposta7}', '${resposta8}', '${resposta9}', '${resposta10}', '${resposta11}', '${resposta12}', '${resposta13}', '${resposta14}', '${resposta15}', '${resultado}', ${fkUsuario});
    `; // criar uma rota get no usuario para pegar o id dele
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function totalRespostas(){

    var instrucao = `
        SELECT COUNT(id) AS totalRespostas FROM respostas;
    `;

    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    totalRespostas
};