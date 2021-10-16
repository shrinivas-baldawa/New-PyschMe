const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors({origin: '*'}));
app.use(express.json());

//ROUTES//
// create a user
app.post("/users",async(req, res) => {
    try {
        const {name} = req.body;
        const {email} = req.body;
        const {dob} = req.body;
        const {phone} = req.body;
        const {password} = req.body;
        const newUser = await pool.query("INSERT INTO login_details values($1,$2,$3,$4,$5) RETURNING *",[name, email, dob, phone, password]);
        res.json(newUser.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get all users
app.get("/users",async(req,res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM login_details");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a user by email id
app.get("/users/:email",async(req,res) => {
    try {
        const {email} = req.params;
        const getUser = await pool.query("SELECT email,password FROM login_details WHERE email = ($1)",[email]);
        res.json(getUser.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// update user password by email id
app.put("/users/:email",async(req,res) =>{
    try {
        const {email} = req.params;
        const {password} = req.body;
        const updateUser = await pool.query("UPDATE login_details SET password = $1 WHERE email = $2",[password,email]);
        res.json(updateUser.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, ()=> {
    console.log("server listening on port 5000");
});