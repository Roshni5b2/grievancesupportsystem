const mongojs = require('mongojs')
const db = mongojs('mongodb://mits:mits01@cluster0-shard-00-00-9kpnk.mongodb.net:27017/internship?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['datain']);
var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/',function(req,res){
	res.sendFile(__dirname+'/complaint.html')
})
app.get('/',function(req,res){
	//console.log(req.query.name);
	var a={
	complaint:req.query.complaint,
	department:req.query.department,
	year:req.query.year,
	section:req.query.section,
	category:req.query.category,
	complainttext:req.query.complainttext,
	complaintsub:req.query.complaintsub
	}
		db.datain.insert(a,function(err,docs){
			res.sendFile(__dirname+"/abc.html");

	})
})
app.listen(5000,function(){
	console.log("server started")
})