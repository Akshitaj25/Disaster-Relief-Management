const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const Disaster_manModel = require('./models/Disaster_man.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/disaster_management', )

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    Disaster_manModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("user not found")
        }
    })
})

app.post('/register', (req,res)=>{
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    // Check if email already exists
    Disaster_manModel.findOne({email:email})
    .then(user=>{
        if(user){
            return res.status(400).json({message: "Email already exists"});
        } else {
            // Create new user if email is unique
            Disaster_manModel.create({name, email, password})
            .then(newUser => res.status(201).json(newUser))
            .catch(err => res.status(500).json({message: "Internal server error"}));
        }
    })
    .catch(err => res.status(500).json({message: "Internal server error"}));
})

app.listen(3001, () => {
    console.log('Server is running ...')
})
