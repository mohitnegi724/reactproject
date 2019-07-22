var express = require("express");
var app = express();
var Keys = require('./keys/mongodb');
var posts = require("./models/post.model.js");
var mongoose = require('mongoose');
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(Keys.mongoURI, {
    useNewUrlParser: true
},() => console.log("Database Connected"));

app.get('/',(req, res)=>{
    posts.find({}).then(responses => res.json(responses)).catch(err => res.send(err));
});

app.get('/articles',(req, res)=>{
    posts.find({}).then(responses=>res.json(responses)).catch(err=>res.send(err));
});

app.get('/article/:alias', (req, res) => {
    posts.findOne({alias:req.params.alias}).then(responses => res.json(responses)).catch(err => res.send(err));
});

app.post('/create',async (req, res)=>{
    const alias= ()=>{
        return req.body.title.toLowerCase().split(' ').join("-");
    }
    const articleAlias = alias();
    const NewPost={
        title:req.body.title,
        articleBody:req.body.articleBody,
        contactNumber:req.body.contact,
        publishDate:Date.now(),
        source:req.body.source,
        image: req.body.image,
        imgPictureCredit: req.body.credit,
        alias:articleAlias
    };
    if(alias) {
        await posts.findOne({
                    alias
                }, (err, post) => {
            if(post){
                res.send("This Place is Already Listed In Our Database");
            }else{
                 posts.create(NewPost).then(data => res.redirect("/")).catch(err => res.send(err));
            }
        })
    }
});

app.delete('/delete/:id',(req, res)=>{
    const id = req.params.id;
    posts.findOneAndRemove({_id:id}, (err, success)=>{
        if(err){
            res.send(err);
        }else{
            res.send("You Successfully Deleted The Post");
        }
    });
});


app.delete('/deleteall', (req, res) => {
    posts.remove({}, (err, success) => {
        if (err) {
            res.send(err);
        } else {
            res.send("You Successfully Deleted All The Posts");
        }
    });
});


// mongoURI:"mongodb://usrname:psd@ds231643.mlab.com:31643/reactproject"

app.listen(5000,()=>{
    console.log("App is listening");
});