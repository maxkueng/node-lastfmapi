/**
 * This example show how to authenticate with the Last.fm API.
 * Authentication is only required to make signed method calls 
 * or use write methods.
 */

// ** BEGIN EDIT HERE **************************************************

var LASTFM_API_KEY = ''; // YOUR LASTFM API KEY HERE
var LASTFM_API_SECRET = ''; // YOUR LASTFM API SECRET HERE
var DEMO_PORT = 1337;
var DEMO_URL = 'http://127.0.0.1:' + DEMO_PORT;

// ** END EDIT HERE ****************************************************

if ( !LASTFM_API_KEY || !LASTFM_API_SECRET ) {
	console.log('Please edit `LASTFM_API_KEY` and `LASTFM_API_SECRET` before running this example.');
	console.log('If you don\'t have an API key, get one here: http://www.last.fm/api/account/create');
	process.exit(1);
}

var http = require('http');
var url = require('url');
var LastfmAPI = require('../lib/lastfmapi');

var lfm = new LastfmAPI({
	'api_key' : LASTFM_API_KEY,
	'secret' : LASTFM_API_SECRET
});

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;

	if (pathname === '/') {
		var authUrl = lfm.getAuthenticationUrl({ 'cb' : DEMO_URL + '/auth' });

		res.writeHead(200, { 'Content-Type' : 'text/html' });
		res.end('<a href="' + authUrl + '">Authenticate</a>');
		return;
	}

	if (pathname === '/auth') {
		var token = url.parse(req.url, true).query.token;

		lfm.authenticate(token, function (err, session) {
			if (err) {
				res.writeHead(401, { 'Content-Type' : 'text/plain' });
				res.end('Unauthorized');

			} else {
				res.writeHead(200, { 'Content-Type' : 'text/html' });
				res.write('<p>Authentication successful. You can now make authenticated method calls.</p>');
				res.write('<pre>' + JSON.stringify(session, null, '    ') + '</pre>');
				res.write('<p>Store this data for future authentication.</p>');
				res.write('<p>Use <code>lfm.setSessionCredentials(\'' + session.username + '\', \'' + session.key + '\');</code> for automatic authentication in the future.</p>');
				res.end('<pre>:)</pre>');
			}

		});

		return;
	}

	res.writeHead(404, { 'Content-Type' : 'text/plain' });
	res.end('Not found');


}).listen(DEMO_PORT);

console.log('Server running.');
console.log(DEMO_URL);
