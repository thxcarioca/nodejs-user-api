const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test"); // Conectar ao banco de dados
mongoose.promise = global.Promise; // Classe de promise do mongoose

module.exports = mongoose;
