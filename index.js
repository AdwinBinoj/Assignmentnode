
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '/public')));
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        console.log(err);
    }

});
app.use(bodyParser.urlencoded({
    extended: true
}));  

        var enterdname="";
   	    var enterdpasswrd="";
   	    var enteredtitle="";
   	    var enteredcontent="";
   		 var enteredpassword="";
   			var reenteredpassword="";
   			var newusername="";
   			var newpassword="";
        var newpassword1="";
   			var security="";
        var security1="";
        var html="";
         var newusername1="";
  var updtdpassword="";
   var updtdpassword1="";
// Load jQuery with the simulated jsdom window.
var MongoClient = require('mongodb').MongoClient ;
var url= "mongodb://Test:adwin@ds051605.mlab.com:51605/details" 
MongoClient.connect(url, function(err, db) {
 console.log("connect")
   var data = db.collection('table1');
   console.log("inserted");
    // console.log(data);
   var ad=data.find().toArray(function(e,o){
   	
   	console.log(o);
   	app.post('/Add',function(Req,Res){
	 enterdname=Req.body.username;
	 enterdpasswrd=Req.body.Password;
	console.log(enterdpasswrd+ enterdname);
	data.find({name:enterdname,password:enterdpasswrd}).toArray(function(err,docs){
		console.log(docs.id);
		if(docs.length){
			console.log("username exists");
			Res.redirect("/loginview");
		}
		else{
			console.log("please signup");
			Res.redirect("/Login");
		}
	})
}) 
   });
	});
	
	app.post('/index',function(Req,Res){
		MongoClient.connect(url, function(err, db) {
 console.log("connect")
   var data= db.collection('table1');
   console.log("inserted");
   newusername=Req.body.newname;
   newpassword=Req.body.newPasswrd;
   	newpassword1=Req.body.Password1;
   	security=Req.body.securityqstn1;
   data.find({name:newusername}).toArray(function(err,docs){
   	if(docs.length){
   		console.log("username is already present");
      Res.redirect("/signup");
   	}
   	else{
   		if(newpassword===newpassword1){
   		 data.insert({name:newusername ,password:newpassword,securityqstn:security}, function(err, result) {});
        Res.redirect("/index");
   		}
   		else{
   			console.log("confirm password is wrong");
         Res.redirect("/signup");
   		}
   	}
   });
	});
	});
  app.post('/reset',function(Req,Res){
    MongoClient.connect(url, function(err, db) {
 console.log("connect")
   var data= db.collection('table1');
   console.log("inserted");
   newusername1=Req.body.username1;
   updtdpassword=Req.body.updatedPassword;
    updtdpassword1=Req.body.updatedPassword1;
    security1=Req.body.pet;
   data.find({name:newusername1,securityqstn:security1}).toArray(function(err,docs){
    console.log(docs);
    if(docs.length==0){
      console.log("username is wrong");
    }
    else{
      if(updtdpassword==updtdpassword1){
      data.update({'name':newusername1},{$set:{'password':updtdpassword1}})
        Res.redirect("/loginview");
      }
      else{
        console.log("confirm password is wrong");
      }
    }
   });
  });
  });
  app.post('/post',function(Req,Res){
    MongoClient.connect(url, function(err, db) {
 console.log("connect")
   var data= db.collection('table2');
   console.log("post");
    newcontent=Req.body.content;
    newtopic=Req.body.title;
       data.insert({name:enterdname , topic:newtopic,content:newcontent}, function(err, result) {});
 data.find().toArray(function(e,o){
  console.log(o);
  var data3=o;
       app.get("/somedata1",function(req,res){ 
      res.send(data3);
});
});

        Res.redirect("/loginview");
   });
  });
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/login',function(req,res){
	 res.sendFile(__dirname + '/Login.html');
})
app.get('/reset', function(req, res) {
    res.sendFile(__dirname + '/reset.html');
});
app.get('/signup',function(req,res){
	 res.sendFile(__dirname + '/signup.html');
})
app.get('/Add', function(req, res) {
    res.sendFile(__dirname + '/Add.html');
});
app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/loginview', function(req, res) {
    res.sendFile(__dirname + '/loginview.html');
});
 var data2=[];
  var url= "mongodb://Test:adwin@ds051605.mlab.com:51605/details" 
    MongoClient.connect(url, function(err, db) {
 // console.log("connect")
  var data= db.collection('table2');
   data.find().toArray(function(e,o){
       // console.log(o);
  data2=o;
app.get("/somedata",function(req,res){ 
      res.send(data2);
});

     });
})
app.listen(3000);
// module.exports = router;