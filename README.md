This is a wrapper library for James' [lastfm-node][lastfmnode] module, a Last.fm API client for Node.js.
It aims to provide a simpler API for the Last.fm methods with one single callback function instead of an options object.

Getting Started
---------------

Install with npm

```sh
npm install lastfmapi
```

or add it to the `dependencies` array in your package.json file. This module follows the [Semantic Versioning][semver] guidelines so you can expect all sub-versions of the same major version to have a compatible API.

Use `require` to load the module

```javascript
var LastfmAPI = require('./lib/lastfmapi');
```

and create a new instance as follows:

```javascript
var lfm = new LastfmAPI({
	'api_key' : 'YOUR_API_KEY',
	'secret' : 'YOUR_API_SECRET'
});
```

Try it out:

```javascript
lfm.track.getInfo({
	'artist' : 'Poliça',
	'track' : 'Wandering Star'
}, function (err, track) {
	if (err) { throw err; }
	console.log(track);
});
```

If you don't already have a Last.fm API account, you can get one [here][register].

### Authentication for Web Applications

Read more about web application authentication [here][webauth].

To authenticate a user for a web application, first define a callback URL (`cb`) that will handle the authentication token. Then create and authentication URL and redirect the user to it.

```javascript
var authUrl = lfm.getAuthenticationUrl({ 'cb' : 'http://example.com/auth' });
console.log(authUrl); // redirect the user to this URL
```

The URL will look something like "http://www.last.fm/api/auth/?api_key=YOUR_API_KEY&cb=http%3A%2F%2Fexample.com%2Fauth"
After the user has authorized your application, Last.fm will redirect
the user to your callback URL. Somethig like "http://example.com/auth?token=THE_AUTHENTICATION_TOKEN"

Then use the `authenticate` method using the received authentication token:

```javascript
lfm.authenticate('THE_AUTHENTICATION_TOKEN', function (err, session) {
	if (err) { throw err; }
	console.log(session); // {"name": "LASTFM_USERNAME", "key": "THE_USER_SESSION_KEY"}
});
```

The `authenticate` method is a short-hand function that does `auth.getSession` and stores the session credentials in the `LastfmAPI` object using the `setSessionCredentials` method. You could also do the same things manually.  
The method will give you an object containing the user's session
credentials. It is advised that you save this data to disc for later
use. Session keys do not expire.

To authenticate the user again at a later time, simply set the credentials using `setSessionCredentials` and you are set to make authenticated method calls:

```javascript
lfm.setSessionCredentials('LASTFM_USERNAME', 'THE_USER_SESSION_KEY');
```

### Authentication for Desktop Applications
_(Coming soon)_

### Authentication for Mobile Applications
_(Coming soon)_

Documentation
-------------
_(Coming soon)_

Examples
--------

_(Coming soon)_

License
-------

Copyright (c) 2013 Max Kueng
Licensed under the MIT license.


[lastfmnode]: https://github.com/jammus/lastfm-node
[semver]: http://semver.org/
[register]: http://www.last.fm/api/account/create
[webauth]: http://www.last.fm/api/webauth
