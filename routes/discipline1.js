const express = require("express")
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * from DISCIPLINES_1", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})


Router.get("/:id", (req, res) => {
    mysqlConnection.query("SELECT * from DISCIPLINES_1 where DISCIPLINES_1.ID = ?",[req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})


module.exports = Router;