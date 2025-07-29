LastfmAPI
=========

This is a wrapper library for James' [lastfm-node][lastfmnode] module, a
Last.fm API client for Node.js.  
It aims to provide a simpler API for the Last.fm methods with one single
callback function instead of an options object with handler methods. It
also adds a signature to all methods that require signing automatically.

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
var LastfmAPI = require('lastfmapi');
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

Examples
--------

### Authentication for Web Applications

_Check out the authentication example in the examples directory for a working example._

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
	console.log(session); // {"username": "LASTFM_USERNAME", "key": "THE_USER_SESSION_KEY"}
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

### Scrobbling

This example requires authentication and assumes you have your session
credentials at-the-ready. Look at the
[authentication](#authentication-for-web-applications) example to see
how it works.

```javascript
var LastfmAPI = require('lastfmapi');

// Create a new instance
var lfm = new LastfmAPI({
	'api_key' : 'YOUR_API_KEY',
	'secret' : 'YOUR_API_SECRET'
});

var mySessionCreds = {
	'username' : 'myLastFmUsername',
	'key' : 'MY_LASTFM_SESSION_KEY'
};

lfm.setSessionCredentials(mySessionCreds.username, mySessionCreds.key);

// Scrobble 'Wandering Star' by 'Poliça', 5 minutes ago
lfm.track.scrobble({
	'artist' : 'Poliça',
	'track' : 'Wandering Star',
	'timestamp' : Math.floor((new Date()).getTime() / 1000) - 300

}, function (err, scrobbles) {
	if (err) { return console.log('We\'re in trouble', err); }

	console.log('We have just scrobbled:', scrobbles);
});
```

_(More coming soon)_

Documentation
-------------

The rule of thumb is that when a method has only required parameters, or
one or more required and one optional parameter, they will be
represented in the API as regular function arguments. If the method
takes one or more required and multiple optional parameters, the
function will take a `params` object. If all parameters are optional,
the `params` object becomes optional.

The first argument of the callback is always `err`, which is an Error
object in case of an error or null if everything went well. The second
argument is the result.

The following documentation assumes that `lfm` is an instance of LastfmAPI.

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


Jump: [Album](#album) | [Artist](#artist) | [Auth](#auth) | [Chart](#chart) | [Geo](#geo) | [Library](#library) | [Tag](#tag) | [Track](#track) | [User](#user)

### Album

##### `lfm.album.addTags(artist, album, tags, callback(err))`

See [docs](http://www.last.fm/api/show/album.addTags). `tags` can be a string or an array.

##### `lfm.album.getInfo(params, callback(err, album))`

See [docs](http://www.last.fm/api/show/album.getInfo) for params.

##### `lfm.album.getTags(params, callback(err, tags))`

See [docs](http://www.last.fm/api/show/album.getTags) for params.

##### `lfm.album.getTopTags(params, callback(err, toptags))`

See [docs](http://www.last.fm/api/show/album.getTopTags) for params.

##### `lfm.album.removeTag(artist, album, tag, callback(err))`

See [docs](http://www.last.fm/api/show/album.removeTag).

##### `lfm.album.search(params, callback(err, results))`

See [docs](http://www.last.fm/api/show/album.search) for params.

### Artist

##### `lfm.artist.addTags(artist, tags, callback(err))`

See [docs](http://www.last.fm/api/show/artist.addTags). `tags` can be a string or an array.

##### `lfm.artist.getCorrection(artist, callback(err, corrections))`

See [docs](http://www.last.fm/api/show/artist.getCorrection).

##### `lfm.artist.getInfo(params, callback(err, artist))`

See [docs](http://www.last.fm/api/show/artist.getInfo) for params.

##### `lfm.artist.getSimilar(params, callback(err, similarArtists))`

See [docs](http://www.last.fm/api/show/artist.getSimilar) for params.

##### `lfm.artist.getTags(params, callback(err, tags))`

See [docs](http://www.last.fm/api/show/artist.getTags) for params.

##### `lfm.artist.getTopAlbums(params, callback(err, topAlbums))`

See [docs](http://www.last.fm/api/show/artist.getTopAlbums) for params.

##### `lfm.artist.getTopTags(params, callback(err, topTags))`

See [docs](http://www.last.fm/api/show/artist.getTopTags) for params.

##### `lfm.artist.getTopTracks(params, callback(err, topTracks))`

See [docs](http://www.last.fm/api/show/artist.getTopTracks) for params.

##### `lfm.artist.removeTag(artist, tag, callback(err))`

See [docs](http://www.last.fm/api/show/artist.removeTag).

##### `lfm.artist.search(params, callback(err, results))`

See [docs](http://www.last.fm/api/show/artist.search) for params.

### Auth

##### `lfm.auth.getMobileSession(username, password, callback(err, session))`

See [docs](http://www.last.fm/api/show/auth.getMobileSession).

##### `lfm.auth.getSession(token, callback(err, session))`

See [docs](http://www.last.fm/api/show/auth.getSession).

##### `lfm.auth.getToken(callback(err, token))`

See [docs](http://www.last.fm/api/show/auth.getToken).

###Chart

##### `lfm.chart.getTopArtists([params,] callback(err, artists))`

See [docs](http://www.last.fm/api/show/chart.getTopArtists) for params. `params` is optional.

##### `lfm.chart.getTopTags([params,] callback(err, tags))`

See [docs](http://www.last.fm/api/show/chart.getTopTags) for params. `params` is optional.

##### `lfm.chart.getTopTracks([params,] callback(err, tracks))`

See [docs](http://www.last.fm/api/show/chart.getTopTracks) for params. `params` is optional.

### Geo

##### `lfm.geo.getTopArtists(params, callback(err, topArtists))`

See [docs](http://www.last.fm/api/show/geo.getTopArtists) for params.

##### `lfm.geo.getTopTracks(params, callback(err, topTracks))`

See [docs](http://www.last.fm/api/show/geo.getTopTracks) for params.

### Library

##### `lfm.library.getArtists(params, callback(err, artists))`

See [docs](http://www.last.fm/api/show/library.getArtists) for params.

### Tag

##### `lfm.tag.getInfo(tag, [lang,] callback(err, tag))`

See [docs](http://www.last.fm/api/show/tag.getInfo). `lang` is optional and, if provided, must be an ISO 639 alpha-2 language code.

##### `lfm.tag.getSimilar(tag, callback(err, similarTags))`

See [docs](http://www.last.fm/api/show/tag.getSimilar).

##### `lfm.tag.getTopAlbums(params, callback(err, topAlbums))`

See [docs](http://www.last.fm/api/show/tag.getTopAlbums) for params.

##### `lfm.tag.getTopArtists(params, callback(err, topArtists))`

See [docs](http://www.last.fm/api/show/tag.getTopArtists) for params.

##### `lfm.tag.getTopTags(callback(err, topTags))`

See [docs](http://www.last.fm/api/show/tag.getTopTags).

##### `lfm.tag.getTopTracks(params, callback(err, topTracks))`

See [docs](http://www.last.fm/api/show/tag.getTopTracks) for params.

##### `lfm.tag.getWeeklyChartList(tag, callback(err, weeklyChartList))`

See [docs](http://www.last.fm/api/show/tag.getWeeklyChartList).

### Track

##### `lfm.track.addTags(artist, track, tags, callback(err))`

See [docs](http://www.last.fm/api/show/track.addTags). `tags` can be a string or an array.

##### `lfm.track.getCorrection(artist, track, callback(err, corrections))`

See [docs](http://www.last.fm/api/show/track.getCorrection).

##### `lfm.track.getInfo(params, callback(err, track))`

See [docs](http://www.last.fm/api/show/track.getInfo) for params.

##### `lfm.track.getSimilar(params, callback(err, similarTracks))`

See [docs](http://www.last.fm/api/show/track.getSimilar) for params.

##### `lfm.track.getTags(params, callback(err, tags))`

See [docs](http://www.last.fm/api/show/track.getTags) for params.

##### `lfm.track.getTopTags(params, callback(err, topTags))`

See [docs](http://www.last.fm/api/show/track.getTopTags) for params.

##### `lfm.track.love(params, callback(err))`

See [docs](http://www.last.fm/api/show/track.love) for params.

##### `lfm.track.removeTag(artist, track, tag, callback(err))`

See [docs](http://www.last.fm/api/show/track.removeTag).

##### `lfm.track.scrobble(params, callback(err, scrobbles))`

See [docs](http://www.last.fm/api/show/track.scrobble) for params.
`params` can be an array of scrobble parameters to scrobble multiple
tracks at once.

##### `lfm.track.search(params, callback(err, results))`

See [docs](http://www.last.fm/api/show/track.search) for params.

##### `lfm.track.unlove(artist, track, callback(err))`

See [docs](http://www.last.fm/api/show/track.unlove).

##### `lfm.track.updateNowPlaying(params, callback(err, nowPlaying))`

See [docs](http://www.last.fm/api/show/track.updateNowPlaying) for params.

### User

##### `lfm.user.getArtistTracks(params, callback(err, artistTracks))`

See [docs](http://www.last.fm/api/show/user.getArtistTracks) for params.

##### `lfm.user.getFriends(params, callback(err, friends))`

See [docs](http://www.last.fm/api/show/user.getFriends) for params.

##### `lfm.user.getInfo([user,] callback(err, info))`

See [docs](http://www.last.fm/api/show/user.getInfo). `user` is optional. However, authentication is required if omitted.

##### `lfm.user.getLovedTracks(params, callback(err, lovedTracks))`

See [docs](http://www.last.fm/api/show/user.getLovedTracks) for params.

##### `lfm.user.getPersonalTags(params, callback(err, taggings))`

See [docs](http://www.last.fm/api/show/user.getPersonalTags) for params.

##### `lfm.user.getRecentTracks(params, callback(err, recentTracks))`

See [docs](http://www.last.fm/api/show/user.getRecentTracks) for params.

##### `lfm.user.getTopAlbums(params, callback(err, topAlbums))`

See [docs](http://www.last.fm/api/show/user.getTopAlbums) for params.

##### `lfm.user.getTopArtists(params, callback(err, topArtists))`

See [docs](http://www.last.fm/api/show/user.getTopArtists) for params.

##### `lfm.user.getTopTags(user, [limit,] callback(err, topTags))`

See [docs](http://www.last.fm/api/show/user.getTopTags). `limit` is optional.

##### `lfm.user.getTopTracks(params, callback(err, topTracks))`

See [docs](http://www.last.fm/api/show/user.getTopTracks) for params.

##### `lfm.user.getWeeklyAlbumChart(params, callback(err, weeklyAlbumChart))`

See [docs](http://www.last.fm/api/show/user.getWeeklyAlbumChart) for params.

##### `lfm.user.getWeeklyArtistChart(params, callback(err, weeklyArtistChart))`

See [docs](http://www.last.fm/api/show/user.getWeeklyArtistChart) for params.

##### `lfm.user.getWeeklyChartList(user, callback(err, weeklyChartList))`

See [docs](http://www.last.fm/api/show/user.getWeeklyChartList).

##### `lfm.user.getWeeklyTrackChart(params, callback(err, weeklyTrackChart))`

See [docs](http://www.last.fm/api/show/user.getWeeklyTrackChart) for params.

Contributors
------------

 - [Max Kueng](https://github.com/maxkueng)
 - [Aliou Diallo](https://github.com/aliou)
 - [Jiri Bakker](https://github.com/JiriBakker)

License
-------

Copyright (c) 2013 Max Kueng
Licensed under the MIT license.


[lastfmnode]: https://github.com/jammus/lastfm-node
[semver]: http://semver.org/
[register]: http://www.last.fm/api/account/create
[webauth]: http://www.last.fm/api/webauth
