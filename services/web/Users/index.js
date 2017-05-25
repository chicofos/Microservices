const request = require('request');

exports.GetUsers = (callback) => {
  request.get('http://users-service:3000/users', function (err, response, body){
      if(err)
        callback(err);
      else  
        callback(null, JSON.parse(body));
  });
}
 
exports.AuthenticateUser = (callback) => {
  
  request({
      method : "POST",
      uri : "http://users-service:3000/authenticate",
      multipart: [
        {
          'content-type': 'application/json',
          body: JSON.stringify({ username: 'Fosco', password: 'testing' })
        }
      ]
    }, 
    function(err,response,body){  
        if(err)
          callback(err);
        else  
          callback(null, JSON.parse(body));
   });
} 