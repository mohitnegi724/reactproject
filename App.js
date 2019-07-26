var express = require("express");
var app = express();
var Keys = require('./keys/mongodb');
var posts = require("./models/post.model.js");
var mongoose = require('mongoose');
var cors = require("cors");
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(Keys.mongoURI, {
    useNewUrlParser: true
},() => console.log("Database Connected"));

// app.get('/',(req, res)=>{
//     res.sendFile();
// });

app.get('/articles',(req, res)=>{
    posts.find({}).sort({"publishDate":-1}).then(responses=>res.json(responses)).catch(err=>res.send("err"));
});

app.get('/article/:alias',(req, res) => {
    posts.findOne({alias:req.params.alias}, (err, post)=>{
        if(!post){
            res.status(404).send("err in Fetching Article")
        }else{
            res.json(post);
        }
    });
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
                console.log("The Article having alias ", alias, " is already in Our Database");
                res.send("This Place is Already Listed In Our Database");
            }else{
                posts.create(NewPost).then(data => res.redirect("/")).catch(err => res.json({err}));
            }
        })
    }
});

app.post("/update/article/:alias", (req, res)=>{
    const {alias} = req.params;
    posts.findOneAndUpdate({alias}, req.body).then(()=>{
        posts.findOne({alias}).then(()=>res.redirect('/'))
    })
})

app.post('/delete/:alias',async (req, res)=>{
    const alias = await req.params.alias;
    await posts.findOneAndRemove({alias:alias})
    .then(()=>res.redirect("/"))
    .catch(err=>res.send(err))
});


app.delete('/deleteall', async(req, res) => {
    await posts.remove({}, (err, success) => {
        if (err) {
            console.log("Error In Deleting All Articles ", err);
            res.status(404).send(err);
        } else {
            res.send("You Successfully Deleted All The Posts");
        }
    });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(PORT,()=>{
    console.log("App is listening on Port" , PORT);
});