const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    title:String,
    articleBody:String,
    publishDate:Date,
    contactNumber:Number
})
const postModel = mongoose.model('Articles',postSchema)


module.exports=postModel;