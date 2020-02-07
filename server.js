//Initialisation des paramètres globaux de l'application

const express = require("express");
const mysqlConnection = require("./connection");
const bodyParser = require("body-parser");

//On importe nos routes ici.
const ClassementRoutes = require("./routes/classements");
const Discipline1Routes = require("./routes/discipline1");
const Discipline2Routes = require("./routes/discipline2");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//On précise à l'application comment il doit construire les routes et où il va récupérer les fonctions
app.use("/classements", ClassementRoutes);
app.use("/discipline1", Discipline1Routes);
app.use("/discipline2", Discipline2Routes);

//On déclare un port
app.listen(3000);