var database = require("../database/config")


function cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12, resposta13, resposta14, resposta15, resultado, fkUsuario) {
    var instrucao = `
        INSERT INTO respostas (resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7,resposta8,resposta9,resposta10,resposta11,resposta12,resposta13,resposta14,resposta15,resultado,fkUsuario) VALUES ('${resposta1}','${resposta2}', '${resposta3}', '${resposta4}', '${resposta5}', '${resposta6}', '${resposta7}', '${resposta8}', '${resposta9}', '${resposta10}', '${resposta11}', '${resposta12}', '${resposta13}', '${resposta14}', '${resposta15}', '${resultado}', ${fkUsuario});
    `; // criar uma rota get no usuario para pegar o id dele
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function totalRespostas() {

    var instrucao = `
        SELECT COUNT(id) AS totalRespostas FROM respostas;
    `;

    console.log(instrucao);
    return database.executar(instrucao);
}

function resultadoMaisMenosPopular() {

    var instrucao = `
        SELECT resultado, COUNT(resultado) AS quantidade FROM respostas
            GROUP BY resultado
            ORDER BY COUNT(resultado)  DESC;
    `;

    console.log(instrucao);
    return database.executar(instrucao);
}

function qtdResultadosPorcentagem() {

    var instrucao = `
    SELECT resultado,
    COUNT(*) AS quantidade,
    ROUND((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM respostas), 2) AS porcentagem FROM respostas
    GROUP BY resultado
    ORDER BY FIELD(resultado,
    'Casa Atreides',
    'Casa Harkonnen',
    'Casa Corrino',
    'Povo Fremen',
    'Irmandade Bene Gesserit');
    `;

    console.log(instrucao);
    return database.executar(instrucao);

}

function qtdUsuariosCasa() {

    var instrucao = `
    SELECT resultado,COUNT(usuario.id) AS quantidade FROM respostas
	JOIN usuario ON usuario.id = fkUsuario
    GROUP BY (resultado)
    ORDER BY FIELD(resultado,
    'Casa Atreides',
    'Casa Harkonnen',
    'Casa Corrino',
    'Povo Fremen',
    'Irmandade Bene Gesserit');
    `;

    console.log(instrucao);
    return database.executar(instrucao);

}


function qtdAlternativa(fkUsuario, idResposta) {

    var instrucao = `
    SELECT 
-- TOTAL A
(
    SUM(CASE WHEN resposta1 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'A' THEN 1 ELSE 0 END)
) AS totalA,

-- TOTAL B
(
    SUM(CASE WHEN resposta1 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'B' THEN 1 ELSE 0 END)
) AS totalB,

-- TOTAL C
(
    SUM(CASE WHEN resposta1 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'C' THEN 1 ELSE 0 END)
) AS totalC,

-- TOTAL D
(
    SUM(CASE WHEN resposta1 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'D' THEN 1 ELSE 0 END)
) AS totalD,

-- TOTAL E
(
    SUM(CASE WHEN resposta1 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'E' THEN 1 ELSE 0 END)
) AS totalE
FROM respostas
WHERE fkUsuario = ${fkUsuario} AND id = ${idResposta};
    `;

    console.log(instrucao);
    return database.executar(instrucao);
}

function qtdAlternativaPorcentagem(fkUsuario, idResposta) {

    var instrucao = `
   SELECT 

ROUND((
    SUM(CASE WHEN resposta1 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'A' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'A' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Atreides",

ROUND((
    SUM(CASE WHEN resposta1 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'B' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'B' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Harkonnen",

ROUND((
    SUM(CASE WHEN resposta1 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'C' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'C' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Corrino",

ROUND((
    SUM(CASE WHEN resposta1 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'D' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'D' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "Fremen",

ROUND((
    SUM(CASE WHEN resposta1 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta2 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta3 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta4 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta5 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta6 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta7 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta8 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta9 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta10 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta11 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta12 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta13 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta14 = 'E' THEN 1 ELSE 0 END) +
    SUM(CASE WHEN resposta15 = 'E' THEN 1 ELSE 0 END)
)/15 * 100,2) AS "BeneGesserit"

FROM respostas
WHERE fkUsuario = ${fkUsuario} AND id = ${idResposta};
    `;

    console.log(instrucao);
    return database.executar(instrucao);
}



module.exports = {
    cadastrar,
    resultadoMaisMenosPopular,
    totalRespostas,
    qtdResultadosPorcentagem,
    qtdUsuariosCasa,
    qtdAlternativa,
    qtdAlternativaPorcentagem
};