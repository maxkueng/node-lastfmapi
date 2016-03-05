var defaults = require('./defaults');

var Track = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Track.prototype.addTags = function (artist, track, tags, callback) {
	if (!Array.isArray(tags)) { tags = [ tags ]; }
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'tags' : tags.join(','),
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('track.addTags', options);
};

Track.prototype.getCorrection = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track
	}, callback, 'corrections');
	this.lastfm.api.request('track.getCorrection', options);
};

Track.prototype.getInfo = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'track');
	this.lastfm.api.request('track.getInfo', options);
};

Track.prototype.getSimilar = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'similartracks');
	this.lastfm.api.request('track.getSimilar', options);
};

Track.prototype.getTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'tags');
	this.lastfm.api.request('track.getTags', options);
};

Track.prototype.getTopTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptags');
	this.lastfm.api.request('track.getTopTags', options);
};

Track.prototype.love = function (params, callback) {
	var options = defaults.defaultOptions(params, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('track.love', options);
};

Track.prototype.removeTag = function (artist, track, tag, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'tag' : tag,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('track.removeTag', options);
};

Track.prototype.scrobble = function (params, callback) {
	var i, len, key, newParams = {};
	if (Array.isArray(params)) {
		for (i = 0, len = params.length; i < len; i++) {
			for (key in params[i]) {
				newParams[key + '[' + i + ']'] = params[i][key];
			}
		}
		params = newParams;
	}
	var options = defaults.defaultOptions(params, callback, 'scrobbles');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('track.scrobble', options);
};

Track.prototype.search = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'results');
	this.lastfm.api.request('track.search', options);
};

Track.prototype.unlove = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('track.unlove', options);
};

Track.prototype.updateNowPlaying = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'nowplaying');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('track.updateNowPlaying', options);
};
