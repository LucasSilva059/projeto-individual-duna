var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.post("/cadastrar", function (req, res) {
    respostaController.cadastrar(req, res);
})

router.get("/totalRespostas", function(req, res){ // KPI n1
    respostaController.totalRespostas(req, res);
});

router.get("/resultadoMaisMenosPopular", function(req,res){ // KPI 2 e 3 
    respostaController.resultadoMaisMenosPopular(req,res);
});

router.get("/qtdResultadosPorcentagem", function(req,res){ // Grafico barras geral
    respostaController.qtdResultadosPorcentagem(req,res);
});

router.get("/qtdUsuariosCasa", function(req,res){ // Grafico barras geral
    respostaController.qtdUsuariosCasa(req,res);
});


router.get("/qtdAlternativa/:fkUsuario/:idResposta", function(req,res){
    respostaController.qtdAlternativa(req,res);
});


router.get("/qtdAlternativaPorcentagem/:fkUsuario/:idResposta", function(req,res){
    respostaController.qtdAlternativaPorcentagem(req,res);
});



module.exports = router;