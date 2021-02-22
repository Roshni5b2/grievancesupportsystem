const mongojs = require('mongojs')
const db = mongojs('mongodb://mits:mits01@cluster0-shard-00-00-9kpnk.mongodb.net:27017/internship?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['datain']);
var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/index.html'+'public/portfolio.html'+'public/')
})
app.get('/portfolio.html',function(req,res){
	//console.log(req.query.name);
	var a={
		Name:req.query.name,
		Email:req.query.email,
		PhoneNo:req.query.phone,
		Username:req.query.username,
		Password:req.query.password
	}
		db.datain.insert(a,function(err,docs){
			res.sendFile(__dirname+"/public/.html");

	})
})