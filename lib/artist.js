var defaults = require('./defaults');

var Artist = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Artist.prototype.addTags = function (artist, tags, callback) {
	if (!Array.isArray(tags)) { tags = [ tags ]; }
	var options = defaults.defaultOptions({
		'artist' : artist,
		'tags' : tags.join(','),
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('artist.addTags', options);
};

Artist.prototype.getCorrection = function (artist, callback) {
	var options = defaults.defaultOptions({ 'artist' : artist }, callback, 'corrections');
	this.lastfm.api.request('artist.getCorrection', options);
};

Artist.prototype.getEvents = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('artist.getEvents', options);
};

Artist.prototype.getInfo = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'artist');
	this.lastfm.api.request('artist.getInfo', options);
};

Artist.prototype.getPastEvents = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('artist.getPastEvents', options);
};

Artist.prototype.getPodcast = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'rss');
	this.lastfm.api.request('artist.getPodcast', options);
};

Artist.prototype.getShouts = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'shouts');
	this.lastfm.api.request('artist.getShouts', options);
};

Artist.prototype.getSimilar = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'similarartists');
	this.lastfm.api.request('artist.getSimilar', options);
};

Artist.prototype.getTags = function (params, callback) {
	if (!params.user) { params.user = this.lastfm.sessionCredentials.username; } 
	var options = defaults.defaultOptions(params, callback, 'tags');
	this.lastfm.api.request('artist.getTags', options);
};

Artist.prototype.getTopAlbums = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topalbums');
	this.lastfm.api.request('artist.getTopAlbums', options);
};

Artist.prototype.getTopFans = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topfans');
	this.lastfm.api.request('artist.getTopFans', options);
};

Artist.prototype.getTopTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptags');
	this.lastfm.api.request('artist.getTopTags', options);
};

Artist.prototype.getTopTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('artist.getTopTracks', options);
};

Artist.prototype.removeTag = function (artist, tag, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'tag' : tag,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('artist.removeTag', options);
};

Artist.prototype.search = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'results');
	this.lastfm.api.request('artist.search', options);
};

Artist.prototype.share = function (params, callback) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var options = defaults.defaultOptions(params, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('artist.share', options);
};

Artist.prototype.shout = function (artist, message, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'message' : message,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('artist.shout', options);
};
