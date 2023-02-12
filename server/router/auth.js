const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { now } = require('mongoose');
const authenticate = require("../middleware/authenticate");

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/register', async (req, res) =>{
    const { name, email, phone, company, password, cpassword } = req.body;
    
    //checks if any field is empty or not
    if( !name || !email || !phone || !company || !password || !cpassword){ 
        return res.status(422).json({ error: "Fill completely!"});
    }
    
    //checks if email is already in use or not
    try{
        
        const userExist = await User.findOne({ email: email });
        
        if(userExist) {
            return res.status(422).json({ error: "Email already exists "});
        }else if (password != cpassword){
            return res.status(422).json({ error: "Passwords not matching "});
        }

        const user = new User({ name, email, phone, company, password, cpassword });
        
        //hashing the password in userSchema

        //before saving hash the passsword using bcrypt.js
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
        
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        let token;
        const{ email, password } = req.body;
        if(!email || !password) {
            return res,statusbar(400).json({ error: "Pls fill all details" });
        } 

        const userLogin = await User.findOne({ email: email });

        //console.log(userLogin);


        if(userLogin){
            const validatePassword = await bcrypt.compare(password, userLogin.password);
        
            //jwt sign and verify
            token =  await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });
        
            //validate password while logging in
        if(!validatePassword){
            res.status(400).json({ error: "Invalid credentials" });
        } else {
            res.json({ message: "user logged in succcessfully" });
        }
        } else {
            res.json({ message: "Invalid credentials" });
        }
    

    } catch (err) {
        console.log(err);
    }
});


//About Us Page

//router.get(path, callback)
router.get('/tool', authenticate, (req, res) => {
    console.log("My evaluator tool us page");
    res.send('Hello Evaluator');
});


module.exports = router;