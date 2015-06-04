var request = require('request');
console.log('Get Instagram Data');
var clientID = 'insert_your_client_id';
console.log('Client ID: ' + clientID);
var clientSecret = 'insert_your_secret_client';
console.log('Client secret: ' + clientSecret);
var redirectURI = 'insert_your_redirect_uri';
console.log('Client secret: ' + redirectURI);



/*
curl -F 'client_id=client_id' \
    -F 'client_secret=client_secret' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=redirect_uri' \
    -F 'code=code' \
    https://api.instagram.com/oauth/access_token

*/
var code = 'set_code';
var accessToken = 'do_curl_and_set_your_access_token';
request('https://api.instagram.com/v1/tags/sunset/media/recent?access_token=' + accessToken, function(error, response,body) {
	console.log(body);
	
});





