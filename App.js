var express = require("express");
var app = express();
var Keys = require('./keys/mongodb');
var posts = require("./models/post.model.js");
var Users = require("./models/user.model.js");
var mongoose = require('mongoose');
var cors = require("cors");
const shortid = require("shortid");
const path = require('path');
var bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require("passport");
const GoogleStrategy  = require("passport-google-oauth20").Strategy;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[Keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id)
        .then(user => {
            done(null, user);
        });
});






passport.use(new GoogleStrategy({
    clientID:Keys.Google.clientID,
    clientSecret:Keys.Google.clientSecret,
    callbackURL:"/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        Users.findOne({googleId:profile.id}, (err, user)=>{
            if(!user){
                new Users({
                    googleId: profile.id,
                    name: profile.displayName,
                    publishDate: new Date()
                }).save();
                done(null, user);
            }
        });
    }
));

app.get("/auth/google",passport.authenticate('google',{
    scope:["profile", "email"]
}));


app.get("/auth/google/callback",passport.authenticate('google'));





app.get("/users",(req, res)=>{
    Users.find({}).sort({"publishDate":-1}).then(users=>res.send(users)).catch(err=>res.send(err));
});


app.get("/api/currentuser",(req, res)=>{
    console.log(req);
    res.send(req.user);
});









// Step 01
const PORT = process.env.PORT || 5000;

// Step 02
mongoose.connect(process.env.MONGODB_URI || Keys.mongoURI, {
    useNewUrlParser: true
},() => console.log("Database Connected"));




app.get('/articles',(req, res)=>{
    posts.find({}).sort({"publishDate":-1}).then(responses=>res.json(responses)).catch(err=>res.send("err"));
});

app.get('/articles/:alias',(req, res) => {
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
        alias: articleAlias,
        articleBody:req.body.articleBody,
        publishDate: Date.now(),
        source:req.body.source,
        sourceLink: req.body.sourceLink,
        image: req.body.image,
        imgPictureCredit: req.body.imgPictureCredit,
        imgPictureCreditLink: req.body.imgPictureCreditLink,
    };
    await posts.create(NewPost)
    .then(data => res.redirect("/"))
    .catch(err =>{
        const alias = () => {
            return req.body.title.toLowerCase().split(' ').join("-")+shortid.generate();
        }
        const articleAlias = alias();
        console.log(articleAlias);
        const NewPost={
        title:req.body.title,
        alias: articleAlias,
        articleBody:req.body.articleBody,
        publishDate: Date.now(),
        source:req.body.source,
        sourceLink: req.body.sourceLink,
        image: req.body.image,
        imgPictureCredit: req.body.imgPictureCredit,
        imgPictureCreditLink: req.body.imgPictureCreditLink,
        };
        posts.create(NewPost).then(()=>res.redirect("/")).catch(err=>res.send(err));
    });
});

app.post("/api/update/article/:alias", (req, res)=>{
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

// Step 03
if (process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
}

// Step 04
app.listen(PORT,()=>{
    console.log("App is listening on Port" , PORT);
});