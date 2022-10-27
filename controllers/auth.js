const express = require("express");

const User = require("../models/User");

const router = express.Router(); // Classe do express para definir rotas

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.create(req.body); // cria novo usuario e armazena em req.body
    return res.send({ user });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro no cadastro." });
  }
});

module.exports = (app) => app.use("/auth", router);
