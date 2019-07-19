const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    title:String,
    articleBody:String,
    publishDate:Date,
    source:String,
    contactNumber:Number,
    image:String,
    imgPictureCredit:String
});
const postModel = mongoose.model('Articles',postSchema);


module.exports=postModel;