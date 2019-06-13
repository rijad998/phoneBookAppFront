const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const mysql = require("mysql");


app.use(bodyparser.json());

const connection = mysql.createConnection({
  host: "ibu-db-server.adnan.dev",
  user: "almin-p",
  password: "YKX9r7kr",
  database: "db_almin_p"
});

connection.connect();

app.get("/userAccounts", (req, res) => {
    connection.query("Select * FROM accounts", (err, rows, fields) => {
      console.log("I think we fetched accounts!");
      res.json(rows);
    });
});

app.get("/persons", (req, res) => {
    connection.query("Select * FROM natural_persons", (err, rows, fields) => {
      console.log("I think we fetched persons!");
      res.json(rows);
    });
});

app.get("/entities", (req, res) => {
    connection.query("Select * FROM legal_entities", (err, rows, fields) => {
      console.log("I think we fetched persons!");
      res.json(rows);
    });
});

app.listen(process.env.PORT || 8080);
