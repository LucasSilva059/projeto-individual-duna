var respostaModel = require("../models/respostaModel");


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

    respostaModel.cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12, resposta13, resposta14, resposta15, resultado, fkUsuario)
        .then(function (resultadoBanco) {

            console.log(resultado);

            res.json({
                idResposta: resultadoBanco.insertId,
                resultado: resultado
            });

        }).catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro);

        });
}

function totalRespostas(req, res) {

    respostaModel.totalRespostas()
        .then(function (resultado) {

            res.status(200).json(resultado);

        }).catch(function (erro) {

            console.log(erro);

            res.status(500).json(erro.sqlMessage);

        })
}

function resultadoMaisMenosPopular(req, res) {
    respostaModel.resultadoMaisMenosPopular()
        .then(function (resultado) {
            res.status(200).json(resultado);

        }).catch(function (erro) {
            console.log(erro);

            res.status(500).json(erro.sqlMessage)
        })
}

function qtdResultadosPorcentagem(req, res) {
    respostaModel.qtdResultadosPorcentagem()
        .then(function (resultado) {
            res.status(200).json(resultado);

        }).catch(function (erro) {
            console.log(erro);

            res.status(500).json(erro.sqlMessage)
        })
}

function qtdUsuariosCasa(req, res) {
    respostaModel.qtdUsuariosCasa()
        .then(function (resultado) {
            res.status(200).json(resultado);

        }).catch(function (erro) {
            console.log(erro);

            res.status(500).json(erro.sqlMessage)
        })
}

function qtdAlternativa(req, res){
    var fkUsuario = req.params.fkUsuario;
    var idResposta = req.params.idResposta;

    respostaModel.qtdAlternativa(fkUsuario, idResposta)
    .then(function(resultado){
        res.json(resultado);

    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro);

    });

}

function qtdAlternativaPorcentagem(req, res){
    var fkUsuario = req.params.fkUsuario;
    var idResposta = req.params.idResposta;

    respostaModel.qtdAlternativaPorcentagem(fkUsuario, idResposta)
    .then(function(resultado){
        res.json(resultado);

    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro);

    });

}


module.exports = {
    cadastrar,
    totalRespostas,
    resultadoMaisMenosPopular,
    qtdResultadosPorcentagem,
    qtdUsuariosCasa,
    qtdAlternativa,
    qtdAlternativaPorcentagem
}