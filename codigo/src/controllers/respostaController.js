var respostaModel = require("../models/respostaModel");

function listar(req, res) {
    respostaModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var resposta1 = req.body.respostasServer[0];
    var resposta2 = req.body.respostasServer[1];
    var resposta3 = req.body.respostasServer[2];
    var resposta4 = req.body.respostasServer[3];
    var resposta5 = req.body.respostasServer[4];
    var resposta6 = req.body.respostasServer[5];
    var resposta7 = req.body.respostasServer[6];
    var resposta8 = req.body.respostasServer[7];
    var resposta9 = req.body.respostasServer[8];
    var resposta10 = req.body.respostasServer[9];
    var resposta11 = req.body.respostasServer[10];
    var resposta12 = req.body.respostasServer[11];
    var resposta13 = req.body.respostasServer[12];
    var resposta14 = req.body.respostasServer[13];
    var resposta15 = req.body.respostasServer[14];
    var resultado = req.body.resultadoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    respostaModel.cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12, resposta13, resposta14, resposta15, resultado, fkUsuario).then(function (resposta) {
        res.status(200).send("Respostas registradas com sucesso");

        console.log(resultado);

        res.json({
            idResposta: resultado.insertId
        });
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    })
}

    function totalRespostas(req, res){

    respostaModel.totalRespostas()
    .then(function(resultado){

        res.status(200).json(resultado);

    }).catch(function(erro){

        console.log(erro);

        res.status(500).json(erro.sqlMessage);

    })}


module.exports = {
    listar,
    cadastrar,
    totalRespostas
}