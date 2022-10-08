const mysql = require('mysql');
const express =require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());


const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "reservation",
});

conn.connect((err)=>{
    if(!err){
        console.log('connected')
    }else{
        console.log('connexion failed' +JSON.stringfy(err,undefined,2));

    }
});
app.listen(4000,()=>{
    console.log('listening ...')
});

//get reservations
app.get('/reservations',(req,res)=>{
    conn.connect(function(err) {
        // if (err) throw err;
        conn.query("SELECT * FROM reservation", function (err, rows, fields) {
          if (!err) 
          console.log(rows);
          else
          console.log(err);

        });
      });
    
});
// module.exports = conn;