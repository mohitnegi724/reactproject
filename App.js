const express = require("express");
const app = express();
const Keys = require('./keys/mongodb')
const posts = require("./models/post.model.js");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(Keys.mongoURI, ()=>console.log("Database Connected"),{ useNewUrlParser: true })

app.get('/',(req, res)=>{
    res.redirect('/articles')
})
app.get('/articles',(req, res)=>{
    posts.find({}).then(responses=>res.json(responses)).catch(err=>res.send(err))
})

app.post('/create',(req, res)=>{
    const NewPost={
        title:req.body.title,
        articleBody:req.body.articleBody,
        contactNumber:req.body.contact,
        publishDate:Date.now(),
    };
    posts.create(NewPost).then(data=>res.send(data)).catch(err=>res.send(err))
})

app.delete('/delete/:id',(req, res)=>{
    const id = req.params.id;
    posts.findOneAndRemove({_id:id}, (err, success)=>{
        if(err){
            res.send(err)
        }else{
            res.send("You Successfully Deleted The Post")
        }
    })
})


// mongoURI:"mongodb://usrname:psd@ds231643.mlab.com:31643/reactproject"

app.listen(5000,()=>{
    console.log("App is listening")
})