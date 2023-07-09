import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:process.env.USER,
    password:process.env.PASSWORD,
    database: "test3"
});

app.use(express.json());
app.use(cors());

app.get("/", function(req,res){
    res.json("hello this is the backend");
});

app.get("/assessment", function(req,res){
    const q ="SELECT * FROM assessment";
    db.query(q,(err,data)=>{
        if(err){
            return res.json(err);
        } else {
            return res.json(data);
        }
    })
});

app.post("/api/submit", (req,res)=>{
    console.log(req.body);
    const q = "INSERT INTO `test3`.`new_table` (`fraction`, `addition`, `subtraction`,`two-word`,`vocabulary`,`tradition_and_modern_game`,`mumbai_map_topography`,`lemon_sharbat_making`, `stamping_design`) VALUES (?)";
    const values = [req.body.arithmetic.fraction, req.body.arithmetic.addition, req.body.arithmetic.subtraction,req.body.speech.two_word,req.body.speech.vocabulary,req.body.real_life.tradition_and_modern_game,req.body.real_life.mumbai_map_topography,req.body.real_life.lemon_sharbat_making,req.body.real_life.stamping_design]
    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err);
        } else {
            return res.json("Data has been added to the Database.");
        }
    })
})

app.listen(3000, function(){
    console.log("Server started at 3000 port");
});