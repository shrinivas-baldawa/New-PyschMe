const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const Razorpay = require('razorpay')
const shortid = require('shortid');
const path = require('path');
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({origin: '*'}));
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
} 

var razorpay = new Razorpay({
    key_id:'rzp_test_Rxo3iSWRp7weUJ',
    key_secret:'RD0qVzmdkGhawB5T6VcEIuAo',
});

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
        const getUser = await pool.query("SELECT * FROM login_details WHERE email = ($1)",[email]);
        res.json(getUser.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a user by his/her email
app.get("/users/payments/:email",async(req,res)=>{
    try {
        const {email} = req.params;
        const getUser = await pool.query("SELECT doctor_name, doctor_email, doctor_phone FROM payment_details WHERE user_email = ($1)",[email]);
        res.json(getUser.rows)
    } catch (err) {
        console.log(err.message);
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

// payment 
app.post('/payment/razorpay', async(req,res)=>{
    try {
        const payment_capture=1
        const amount=500
        const currency = 'INR'

        const options = {amount:(amount*100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture
        }
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/payment/success', async(req, res)=>{
    try {
        const {payment_id} = req.body;
        const {order_id} = req.body;
        const {signature} = req.body;
        const {doctor_name} = req.body;
        const {doctor_email} = req.body;
        const {doctor_phone} = req.body;
        const {user_email} = req.body;
        const insertPaymentData = await pool.query('INSERT INTO payment_details VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',[payment_id,order_id,signature,doctor_name,doctor_email,doctor_phone,user_email]);
        res.json(insertPaymentData.rows);
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});