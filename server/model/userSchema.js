const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    company: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    cpassword: {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
    websites: [{
        name: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        company: {
            type:String,
            required:true
        },
        phone: {
            type:Number,
            required:true
        },
        website: {
            type:String,
            required:true
        },
        result: {
            type:Number,
            required:true
        },
    }],
    tokens: [
        {
            token: {
                type:String,
                required:true
            }
        }
    ] 
});


//hashing the password
userSchema.pre('save', async function( next ) {
    console.log("bcrypt succcess");
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.cpassword, 12);
    }
    next();
});

//generating jwt token
userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }catch (err) {
        console.log(err);
    }
}

// stored website result
userSchema.methods.addResult = async function (name, email, company, phone, website, result){
    try {
        this.websites = this.websites.concat({name, email, company, phone, website, result})
        await this.save();
        return this.websites;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;
