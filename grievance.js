const mongojs = require('mongojs')
const db = mongojs('mongodb://mits:mits01@cluster0-shard-00-00-9kpnk.mongodb.net:27017/internship?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['studentsignup']);
var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/',function(req,res){
	console.log("started")
	res.sendFile(__dirname+'/public/index.html'+'public/portfolio.html'+'public/')
})
app.get('/portfolio.html',function(req,res){
	//console.log(req.query.name);
	var a={
		Name:req.query.name,
		Email:req.query.email,
		PhoneNo:req.query.phone,
		Gender:req.query.gender,
		Institute:req.query.institute,
		CollegeCode:req.query.code,
		Department:req.query.department,
		RollNo:req.query.rollno,
		Username:req.query.username,
		Password:req.query.password
	}
		db.data1.insert(a,function(err,docs){
		     res.sendFile(__dirname+"/public/portfolio.html");
		     console.log("inserted")


	})
})
app.get('/studentlogin',function(req,res){
	var l = {
		Username:req.query.username,
		Password:req.query.password
	}
	db.data1.find(l,function(err,docs){
			res.sendFile(__dirname+"/public/complaintregform.html")
		
	})
})
app.get('/officialsignup',function(req,res){
	//console.log(req.query.name);
	var a={
		Name:req.query.oname,
		Email:req.query.oemail,
		PhoneNo:req.query.ophone,
		Gender:req.query.ogender,
		Designation:req.query.designation,
		CollegeName:req.query.ocname,
		CollegeCode:req.query.occode,
		Department:req.query.odepartment,
		Id:req.query.id,
		Username:req.query.ousername,
		Password:req.query.opassword
	}
		db.data2.insert(a,function(err,docs){
			res.sendFile(__dirname+"/public/portfolio.html");

	})
})
app.get('/officiallogin',function(req,res){
	var l = {
		Username:req.query.username,
		Password:req.query.password
	}
	db.data2.find(l,function(err,docs){
			res.sendFile(__dirname+"/public/complaintregform.html")
		
	})
})
app.get('3000',function())