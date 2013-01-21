var defaults = require('./defaults');

var Library = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Library.prototype.addAlbum = function (artist, album, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.addAlbum', options);
};

Library.prototype.addArtist = function (artist, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.addArtist', options);
};

Library.prototype.addTrack = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.addTrack', options);
};

Library.prototype.getAlbums = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'albums');
	this.lastfm.api.request('library.getAlbums', options);
};

Library.prototype.getArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'artists');
	this.lastfm.api.request('library.getArtists', options);
};

Library.prototype.getTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'tracks');
	this.lastfm.api.request('library.getTracks', options);
};

Library.prototype.removeAlbum = function (artist, album, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.removeAlbum', options);
};

Library.prototype.removeArtist = function (artist, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.removeArtist', options);
};

Library.prototype.removeScrobble = function (artist, track, timestamp, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'timestamp' : timestamp
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.removeScrobble', options);
};

Library.prototype.removeTrack = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('library.removeTrack', options);
};
