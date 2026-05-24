var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.post("/cadastrar", function (req, res) {
    respostaController.cadastrar(req, res);
})

router.get("/totalRespostas", function(req, res){
    respostaController.totalRespostas(req, res);
});



router.get("/listar", function (req, res) {
    respostaController.listar(req, res);
});

module.exports = router;