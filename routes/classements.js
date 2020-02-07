const express = require("express")
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * from CLASSEMENTS", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * from CLASSEMENTS Where CLASSEMENTS.ID = ?",[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.post("/", (req, res) => {
    mysqlConnection.query("INSERT INTO CLASSEMENTS (NOM,CLASSEMENT) VALUES (?,?)",
    [req.body.NOM, req.body.CLASSEMENTS], (err, rows, fields) => {
        if (!err) {
            res.status(200).end();
        } else {
            console.log(err);
            res.status(500).send("Il y a eu une erreur");
        }
    })
})
module.exports = Router;