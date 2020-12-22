// Initial
const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

// Mongoose connect
mongoose.connect(process.env.CONNECT, {useNewUrlParser: true, useUnifiedTopology: true});

// Models
const User = mongoose.model("User",{name:String,age:Number,likes:Array})
const PostModel = mongoose.model("Post",{user:String,title:String,des:String,likes:Number})

// New Post
// const addPost = (title,des) => {
// 	const newPost = new Post({
// 		user : "Benzigar",
// 		title,
// 		des,
// 		likes : 0
// 	})
// 	newPost.save().then(e => console.log(e))
// }
// addPost("My first Post","This shows my new confident post")
// addPost("My second Post","This shows my another post")

// Routes
// app.get("/",(req,res) => (AllUser.find((err, people) => res.json(people))))
app.get("/users",(req,res) => User.find((err,user) => res.json(user)))
app.get("/posts",(req,res) => PostModel.find((err, post) => res.json(post)))
app.get("/posts/user/:user",(req,res) => PostModel.find({user : req.params["user"]},(err, post) => res.json(post)))
app.get("/posts/create",(req,res) => {
	res.json({query : req.query})
})

app.listen(3000)