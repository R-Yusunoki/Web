const express = require("express");
const app = express();
const sql = require("mysql");

let sql_setting = {
  host: "localhost",
  user: "ryusunoki",
  password: "password",
  database: "mysql"
};

app.use(express.static("/home/pserver/forserve/public"));

//Home用
app.get("/mysql",function(req,res){

  let connection = sql.createConnection(sql_setting);

  connection.connect();
  
  connection.query("SELECT User FROM user",function(error,results,fields){
    console.log(results);
    res.send(results);
  });

  connection.end();
});

//Search用
app.get("/search",function(req,res){

  let connection = sql.createConnection(sql_setting);

  connection.connect();
  
  connection.query("SELECT* FROM user WHERE User=?","ryusunoki",function(error,results,fields){
    console.log(results[0]["Host"]);
    res.send(results[0]);
  });

  connection.end();
});


app.listen(80, function () {
  console.log("Starting server on port 80");
});
