const express = require("express"); // importando express e bodyParser
const bodyParser = require("body-parser");

const app = express(); // criar aplicação chamando express

app.use(bodyParser.json()); // função de middleware para processar json
app.use(bodyParser.urlencoded({ extended: false })); // entender parametros url

require("./controllers/auth")(app);

app.listen(3000);
