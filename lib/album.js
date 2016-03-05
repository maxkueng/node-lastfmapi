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

Album.prototype.getInfo = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'album');
	this.lastfm.api.request('album.getInfo', options);
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
