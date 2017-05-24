var User = require('../models/user');
var jwt    = require('jsonwebtoken');
const config = require('../config');

exports.CreateUser = (req, callback) => {

    //TODO: Validations

    var usr = new User({
        name: req.body.username,
        password : req.body.password,
        admin : req.body.admin ? req.body.admin : false
    });

    usr.save((err) =>{
        if(err) callback(err);
            callback(null, 'User Successfully Saved');  
    })
}

exports.Authenticate = (req, callback) => {
    //Find user into mongo database
    User.findOne({ name : req.body.username }, (err,user) => {
        if(err) callback(err);
        //User not exists
        if(!user){
            callback(null, 
            { 
                success : false , 
                message : "User Authentication failed, user not found"
            });
        } 
        else if(user){
            //Password is wrong
            if(user.password != req.body.password){
                callback(null, 
                { 
                    success : false , 
                    message : "User Authentication failed, wrong password"
                });
            } 
            else{
                //Success Login
                var token = jwt.sign(user, config.secret, {
                    expiresIn : 300
                });

                callback(null, {
                    success : true,
                    message : 'Login successfull',
                    token : token
                });
            }
        }
    });
}

exports.GetUsers = (callback) => {
   User.find({}, function(err, users){
      if(err) callback(err);
      callback(null, users);
   })
       
}