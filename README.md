This is a wrapper library for James' [lastfm-node][lastfmnode] module, a
Last.fm API client for Node.js.  
It aims to provide a simpler API for the Last.fm methods with one single
callback function instead of an options object with handler methods.

Getting Started
---------------

Install with npm

```sh
npm install lastfmapi
```

or add it to the `dependencies` array in your package.json file. This
module follows the [Semantic Versioning][semver] guidelines so you can
expect all sub-versions of the same major version to have a compatible
API.

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

If you don't already have a Last.fm API account, you can get one
[here][register].

### Authentication for Web Applications

In order to make signed method calls or use write methods such das
scrobbling, you need to authenticate your application. Read more about
web application authentication [here][webauth].

To authenticate a user for a web application, first define a callback
URL (`cb`) that will handle the authentication token. Then create an
authentication URL and redirect the user to it.

```javascript
var authUrl = lfm.getAuthenticationUrl({ 'cb' : 'http://example.com/auth' });
console.log(authUrl); // redirect the user to this URL
```

The URL will look something like
"http://www.last.fm/api/auth/?api_key=YOUR_API_KEY&cb=http%3A%2F%2Fexample.com%2Fauth"

After the user has authorized your application, Last.fm will redirect
the user to your callback URL. Somethig like
"http://example.com/auth?token=THE_AUTHENTICATION_TOKEN"

Then use the `authenticate` method using the received authentication
token:

```javascript
lfm.authenticate('THE_AUTHENTICATION_TOKEN', function (err, session) {
	if (err) { throw err; }
	console.log(session); // {"name": "LASTFM_USERNAME", "key": "THE_USER_SESSION_KEY"}
});
```

The `authenticate` method is a short-hand function that does
`auth.getSession` and stores the session credentials in the `LastfmAPI`
object using the `setSessionCredentials` method. You could also do the
same things manually.  
The method will give you an object containing the user's session
credentials. It is advised that you save this data to disc for later
use. Session keys do not expire.

To authenticate the user again at a later time, simply set the
credentials using `setSessionCredentials` and you are set to make
authenticated method calls:

```javascript
lfm.setSessionCredentials('LASTFM_USERNAME', 'THE_USER_SESSION_KEY');
```

### Authentication for Desktop Applications
_(Coming soon)_

### Authentication for Mobile Applications
_(Coming soon)_

Documentation
-------------

The rule of thumb is that when a method has only required parameters, or
one or more required and one optional parameter, they will be
represented in the API as regular function arguments. If required and
optional parameters, the function will take a `params` object.

The first argument of the callback is always `err`, which is an Error
object in case of an error or null if everything went fine. The second
argument is the result.

_(More coming soon)_

##### `new LastfmAPI(options)`  

The constructor takes an options object with 2 properties: The `api_key`
property contains your Last.fm API key and `secret` contains your
Last.fm API secret

##### `lfm.api`  

Exposes the underlying [lastfm-node][lastfmnode] API client so you can
go "low-level" if you like

##### `lfm.getAuthenticationUrl(params)`  

Constructs and returns an authentication URL. The params object has 2
optional properties: `cb` is the callback URL and `token` is an
authentication token

##### `lfm.authenticate(token, callback(err, sessionData))`  

Fetches a Last.fm session and stores the session credentials in the
object

##### `lfm.setSessionCredentials(username, sessionToken)`  

Stores session credentials that will be used to make API calls that
require authentication

##### `lfm.sessionCredentials`  

Exposes the session credentials used to make authenticated API calls.
The object contains 2 properties: `username` is the Last.fm username and
`key` is the session key


Jump: [Album](#album) | [Artist](#artist) | [Auth](#auth) | [Chart](#chart) | [Event](#event) | [Geo](#geo) | [Group](#group) | [Library](#library) | [Playlist](#playlist) | [Radio](#radio) | [Tag](#tag) | [Tasteometer](#tasteometer) | [Track](#track) | [User](#user) | [Venue](#venue)

### Album

##### `lfm.album.addTags(artist, album, tags, callback(err))`

See [docs](http://www.last.fm/api/show/album.addTags). `tags` can be a string or an array.

##### `lfm.album.getBuylinks(params, callback(err, affiliations))`

See [docs](http://www.last.fm/api/show/album.getBuylinks) for params.

##### `lfm.album.getInfo(params, callback(err, album))`

See [docs](http://www.last.fm/api/show/album.getInfo) for params.

##### `lfm.album.getShouts(params, callback(err, shouts))`

See [docs](http://www.last.fm/api/show/album.getShouts) for params.

##### `lfm.album.getTags(params, callback(err, tags))`

See [docs](http://www.last.fm/api/show/album.getTags) for params.

##### `lfm.album.getTopTags(params, callback(err, toptags))`

See [docs](http://www.last.fm/api/show/album.getTopTags) for params.

##### `lfm.album.removeTag(artist, album, tag, callback(err))`

See [docs](http://www.last.fm/api/show/album.removeTag).

##### `lfm.album.search(params, callback(err, results))`

See [docs](http://www.last.fm/api/show/album.search) for params.

##### `lfm.album.share(params, callback(err))`

See [docs](http://www.last.fm/api/show/album.share) for params.

### Artist

##### `lfm.artist.addTags(artist, tags, callback(err))`

See [docs](http://www.last.fm/api/show/artist.addTags). `tags` can be a string or an array.

##### `lfm.artist.getCorrection(artist, callback(err, corrections))`

See [docs](http://www.last.fm/api/show/artist.getCorrection).

##### `lfm.artist.getEvents(params, callback(err, events))`

See [docs](http://www.last.fm/api/show/artist.getEvents) for params.

##### `lfm.artist.getInfo(params, callback(err, artist))`

See [docs](http://www.last.fm/api/show/artist.getInfo) for params.

##### `lfm.artist.getPastEvents(params, callback(err, events))`

See [docs](http://www.last.fm/api/show/artist.getPastEvents) for params.

##### `lfm.artist.getPodcast(params, callback(err, rss))`

See [docs](http://www.last.fm/api/show/artist.getPodcast) for params.

##### `lfm.artist.getShouts(params, callback(err, shouts))`

See [docs](http://www.last.fm/api/show/artist.getShouts) for params.

##### `lfm.artist.getSimilar(params, callback(err, similarArtists))`

See [docs](http://www.last.fm/api/show/artist.getSimilar) for params.

##### `lfm.artist.getTags(params, callback(err, tags))`

See [docs](http://www.last.fm/api/show/artist.getTags) for params.

##### `lfm.artist.getTopAlbums(params, callback(err, topAlbums))`

See [docs](http://www.last.fm/api/show/artist.getTopAlbums) for params.

##### `lfm.artist.getTopFans(params, callback(err, topFans))`

See [docs](http://www.last.fm/api/show/artist.getTopFans) for params.

##### `lfm.artist.getTopTags(params, callback(err, topTags))`

See [docs](http://www.last.fm/api/show/artist.getTopTags) for params.

##### `lfm.artist.getTopTracks(params, callback(err, topTracks))`

See [docs](http://www.last.fm/api/show/artist.getTopTracks) for params.

##### `lfm.artist.removeTag(artist, tag, callback(err))`

See [docs](http://www.last.fm/api/show/artist.removeTag).

##### `lfm.artist.search(params, callback(err, results))`

See [docs](http://www.last.fm/api/show/artist.search) for params.

##### `lfm.artist.share(params, callback(err))`

See [docs](http://www.last.fm/api/show/artist.share) for params. `params.recipient` can be a string or an array.

##### `lfm.artist.shout(artist, message, callback(err))`

See [docs](http://www.last.fm/api/show/artist.shout).

### Auth

##### `lfm.auth.getMobileSession(username, password, callback(err, session))`

See [docs](http://www.last.fm/api/show/auth.getMobileSession).

##### `lfm.auth.getSession(token, callback(err, session))`

See [docs](http://www.last.fm/api/show/auth.getSession).

##### `lfm.auth.getToken(callback(err, token))`

See [docs](http://www.last.fm/api/show/auth.getToken).

###Chart

##### `lfm.chart.getHypedArtists([params,] callback(err, artists))`

See [docs](http://www.last.fm/api/show/chart.getHypedArtists) for params. `params` is optional.

##### `lfm.chart.getHypedTracks([params,] callback(err, tracks))`

See [docs](http://www.last.fm/api/show/chart.getHypedTracks) for params. `params` is optional.

##### `lfm.chart.getLovedTracks([params,] callback(err, tracks))`

See [docs](http://www.last.fm/api/show/chart.getLovedTracks) for params. `params` is optional.

##### `lfm.chart.getTopArtists([params,] callback(err, artists))`

See [docs](http://www.last.fm/api/show/chart.getTopArtists) for params. `params` is optional.

##### `lfm.chart.getTopTags([params,] callback(err, tags))`

See [docs](http://www.last.fm/api/show/chart.getTopTags) for params. `params` is optional.

##### `lfm.chart.getTopTracks([params,] callback(err, tracks))`

See [docs](http://www.last.fm/api/show/chart.getTopTracks) for params. `params` is optional.

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
