import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1@",
  database: "Costs",
});

app.get("/trips", (req, res) => {
  const q = "SELECT * FROM costs";
  db.query(q,(err, data)=> {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


 app.get("/trips/filterByBudget/:maxBudget", (req, res) => {
   const maxBudget = req.params.maxBudget;
   if(0 > parseInt(maxBudget)){
    res.status('400');
   }
   const q = "SELECT * FROM costs WHERE dialyspending < " + maxBudget;
   db.query(q, (err, data) => {
     if (err) {
       console.log(err);
       return res.json(err);
     }
     console.log(data)
     return res.json(data);   });
 });
 
 app.get("/trips/cities/:city", (req, res) => {
  const city = req.params.city;
  const q = "SELECT * FROM costs WHERE city = '" + city +"'";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
     console.log(data);
     if(data.length == 0){
      res.status('404');
     }
    return res.json(data);   });
});



app.listen(8800, () => {
  console.log("Connected to backend.");
});
