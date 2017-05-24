const request = require('request');

exports.GetUsers = (callback) => {

  request.get('http://users-service:3000/users', function (err, response, body){
      if(err)
        callback(err);
      else  
        callback(null, JSON.parse(body));
  });

}
 