const request = require('request');

exports.GetUsers = (callback) => {


  request.get('http://localhost:3000/users', function (err, response, body){
      if(err)
        callback(err);
      if(!response.body)
        callback('No Response body: ' + response);

        callback(null, JSON.parse(response.body));
  });

}
 