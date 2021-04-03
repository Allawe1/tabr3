import mongoose from 'mongoose';
import validate from 'mongoose-validator';





const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type : String ,
        required : true
    },
    email : {
        type : String , 
        required : true,
    },
    password : {
        type : String ,
        required : true
    },
    location : {
        type : [Number],
        required : true 
    },
    phoneNumber : {
        type : String ,
        required :true
    },

    rates : [{
        type : Schema.Types.ObjectId,
        ref : "Rate",
    }],
    donations : [{
        type : Schema.Types.ObjectId,
        ref : "Donation"
    }]
   
});

const User = mongoose.model('User', userSchema);
export default User;