var respostasModel = require("../models/respostasModel");

function listar(req, res) {
    respostasModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var resposta1 = req.body.resposta1Server;
    var resposta2 = req.body.resposta2Server;
    var resposta3 = req.body.resposta3Server;
    var resposta4 = req.body.resposta4Server;
    var resposta5 = req.body.resposta5Server;
    var resposta6 = req.body.resposta6Server;
    var resposta7 = req.body.resposta7Server;
    var resposta8 = req.body.resposta8Server;
    var resposta9 = req.body.resposta9Server;
    var resposta10 = req.body.resposta10Server;
    var resposta11 = req.body.resposta11Server;
    var resposta12 = req.body.resposta12Server;
    var resposta13 = req.body.resposta13Server;
    var resposta14 = req.body.resposta14Server;
    var resposta15 = req.body.resposta15Server;
    var resultado = req.body.resultadoServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    respostasModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("Respostas criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}