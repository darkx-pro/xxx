const express = require("express");
const fs = require("fs");
const path = require("path"); // Ni vizuri kutumia path kwa usalama
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const db = "database.json";

// Hakikisha database ipo
if(!fs.existsSync(db)){
    fs.writeFileSync(db, JSON.stringify({users:[]}, null, 2));
}

// NJIA YA LOGIN
app.post("/login", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(db));
        const username = req.body.username;

        if (username && !data.users.includes(username)) {
            data.users.push(username);
            fs.writeFileSync(db, JSON.stringify(data, null, 2));
        }
        res.json({ status: true });
    } catch (err) {
        res.status(500).json({ status: false, error: "Haikuweza kuhifadhi" });
    }
});

// NJIA YA KUPATA IDADI YA USERS
app.get("/users", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(db));
        res.json({ count: data.users.length });
    } catch (err) {
        res.json({ count: 0 });
    }
});

// Port ya Render au Local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DarkX Running on port ${PORT}`));
