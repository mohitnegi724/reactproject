const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    alias: {
        type: String,
        unique: true
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
        type: String
    },
    sourceLink: {
        type: String
    },
    image:{
        type: String,
        required:true
    },
    imgPictureCredit:String,
    imgPictureCreditLink: String
});
const postModel = mongoose.model('Articles',postSchema);


module.exports=postModel;