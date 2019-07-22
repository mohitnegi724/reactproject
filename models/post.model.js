const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    articleBody: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    contactNumber:Number,
    image:{
        type: String,
        required:true
    },
    imgPictureCredit:String,
    alias:{
        type:String,
        unique:true
    }
});
const postModel = mongoose.model('Articles',postSchema);


module.exports=postModel;