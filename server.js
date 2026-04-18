const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = "database.json";

if(!fs.existsSync(db)){
 fs.writeFileSync(db, JSON.stringify({users:[]},null,2));
}

app.post("/login",(req,res)=>{
 let data = JSON.parse(fs.readFileSync(db));
 let username = req.body.username;

 if(!data.users.includes(username)){
   data.users.push(username);
 }

 fs.writeFileSync(db, JSON.stringify(data,null,2));
 res.json({status:true});
});

app.get("/users",(req,res)=>{
 let data = JSON.parse(fs.readFileSync(db));
 res.json({count:data.users.length});
});

app.listen(3000,()=>console.log("DarkX Running on 3000"));
