const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String
    },
    googleId:{
        type:String
    },
    publishDate: {
        type: String,
        required: true
    }
});
const userModel = mongoose.model('Users',userSchema);


module.exports=userModel;