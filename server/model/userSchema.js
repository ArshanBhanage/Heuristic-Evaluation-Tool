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
        phone: {
          type:Number,
          required:true
      },
        company: {
            type:String,
            required:true
        },
        website: {
            type:String,
            required:true
        },
      websiteUrl: {
        type: String,
        required: true
      },
      quesCat:{
        type: String,
        required: true
      },
      rresult: {
        ELearning: {
          type: Number,
          required: true
        },
        Navigation: {
          type: Number,
          required: true
        },
        Search: {
          type: Number,
          required: true
        }
      },
      roverall: {
        type: [Number],
        required: true
      },
      rvalid: {
        type: Number,
        required: true
      },
      rinvalid: {
        type: Number,
        required: true
      },
      rquestionScores: {
        ELearning: {
          type: [Number],
          required: true
        },
        Navigation: {
          type: [Number],
          required: true
        },
        Search: {
          type: [Number],
          required: true
        }
      },
      categoryRValid: {
        ELearning: {
          type: Number,
          required: true
        },
        Navigation: {
          type: Number,
          required: true
        },
        Search: {
          type: Number,
          required: true
        }
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
userSchema.methods.addResult = async function (name, email , phone, company, website, websiteUrl, quesCat, rresult, roverall, rvalid, rinvalid, rquestionScores, categoryRValid){
    try {
        this.websites = this.websites.concat({name, email , phone, company, website, websiteUrl, quesCat, rresult, roverall, rvalid, rinvalid, rquestionScores, categoryRValid})
        await this.save();
        return this.websites;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;