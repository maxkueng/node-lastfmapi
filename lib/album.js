var defaults = require('./defaults');

var Album = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Album.prototype.addTags = function (artist, album, tags, callback) {
	if (!Array.isArray(tags)) { tags = [ tags ]; }
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album,
		'tags' : tags.join(','),
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('album.addTags', options);
};

Album.prototype.getBuylinks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'affiliations');
	this.lastfm.api.request('album.getBuylinks', options);
};

Album.prototype.getInfo = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'album');
	this.lastfm.api.request('album.getInfo', options);
};

Album.prototype.getShouts = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'shouts');
	this.lastfm.api.request('album.getShouts', options);
};

Album.prototype.getTags = function (params, callback) {
	if (!params.user) { params.user = this.lastfm.sessionCredentials.username; } 
	var options = defaults.defaultOptions(params, callback, 'tags');
	this.lastfm.api.request('album.getTags', options);
};

Album.prototype.getTopTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptags');
	this.lastfm.api.request('album.getTopTags', options);
};

Album.prototype.removeTag = function (artist, album, tag, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album,
		'tag' : tag,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('album.removeTag', options);
};

Album.prototype.search = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'results');
	this.lastfm.api.request('album.search', options);
};

Album.prototype.share = function (params, callback) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var options = defaults.defaultOptions(params, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('album.share', options);
};
