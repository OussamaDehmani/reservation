

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
 multipleStatements:true
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
          res.send(rows);
          else
          console.log(err);

        });
      });
    
});
//get reservations with id
app.get('/reservations/:nom',(req,res)=>{
    conn.connect(function(err) {
        // if (err) throw err;
        conn.query("SELECT * FROM reservation where nom = ?",[req.params.nom], function (err, rows, fields) {
          if (!err) 
          res.send(rows);
          else
          console.log(err);

        });
      });
    
});
//delete reservations with id
app.delete('/reservations/:nom',(req,res)=>{
    conn.connect(function(err) {
        // if (err) throw err;
        conn.query("DELETE From reservation where nom = ?",[req.params.nom], function (err, rows, fields) {
          if (!err) 
          res.send('Deleted successfully');
          else
          console.log(err);

        });
      });
    
});
//insert new reservation
app.post('/reservations',(req,res)=>{
  var reservation=req.body;
    conn.connect(function(err) {
        // if (err) throw err;
        conn.query("Insert into reservation (nom,phone,date,time) values(?,?,?,?)",
        [reservation.nom,reservation.phone,reservation.date,reservation.time], function (err, rows, fields) {
          if (!err) 
          res.send('inserted successfully');
          else
          console.log(err);

        });
      });
    
});
// module.exports = conn;