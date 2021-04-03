import mongoose from 'mongoose';



const Schema = mongoose.Schema;

const rateSchema = new Schema({

    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    
    comment : String ,

    rating : {
        type : Number ,
        required : true,
    },

   


});
const Rate = mongoose.model('Rate' , rateSchema);

export default Rate;