const express = require("express")
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * from DISCIPLINES_2", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * from DISCIPLINES_2 WHERE DISCIPLINES_2.ID = ?",[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.post("/", (req, res) => {
    mysqlConnection.query("INSERT INTO DISCIPLINES_2 (NOM,LONGUEUR,POIDS,HAUTEUR,DISQUE,PERCHE,JAVELOT) VALUES (?,?,?,?,?,?,?)",
    [req.body.NOM, req.body.LONGUEUR, req.body.POIDS,
         req.body.HAUTEUR, req.body.DISQUE, req.body.PERCHE, req.body.JAVELOT], (err, rows, fields) => {
        if (!err) {
            res.status(200).end();
        } else {
            console.log(err);
            res.status(500).send("Il y a eu une erreur");
        }
    })
})

module.exports = Router;