const express = require('express');
const UserService = require('../Users');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/users', (req, res) => {

    UserService.GetUsers(function(err, users){
        if(err){
            res.render('error');
        }
        else
            res.render('users', { users: users });
    })    
    
});

module.exports = router;

