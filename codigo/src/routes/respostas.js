var express = require("express");
var router = express.Router();

app.use("/respostas", respostasRouter);

router.post("/cadastrar", function (req, res) {
    respostasRouter.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    respostasRouter.listar(req, res);
});

module.exports = router;