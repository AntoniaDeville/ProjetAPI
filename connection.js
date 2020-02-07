//Paramètre de connexion

//On utilise le package mysql
const mysql = require("mysql");

//on déclare une variable qui va réaliser la connection à la base de données
var mysqlConnection = mysql.createConnection({
    host: "mysql-aptone.alwaysdata.net",
    user: "aptone",
    password: "Pandaroux13.",
    database: "aptone_discplines"
})

//On tente de se connecter
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connection success")
    }
    else {
        console.log("Connection failed : " + err)
    }
})

module.exports = mysqlConnection;