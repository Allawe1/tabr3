import mongoose from 'mongoose';
import User from './users.js'

const Schema = mongoose.Schema;

const donationSchema = new Schema({

    user : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },

    title : {
        type : String ,
        required : true
    },

    pickUpTime : {
        type : String ,
        required : true 
    },
    creationDate : {
        type : Date ,
        required : true,
        default : new Date()
    },

    expiryDate : {
        type : String ,
        required : true
    },
    location : {
        type : [Number] ,
        required : true 
    },

});

const Donation = mongoose.model('Donation' , donationSchema);

export default Donation;
