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

Track.prototype.ban = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('track.ban', options);
};

Track.prototype.getBuylinks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'affiliations');
	this.lastfm.api.request('track.getBuylinks', options);
};

Track.prototype.getCorrection = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track
	}, callback, 'corrections');
	this.lastfm.api.request('track.getCorrection', options);
};

Track.prototype.getFingerprintMetadata = function (fingerprintId, callback) {
	var options = defaults.defaultOptions({
		'fingerprintid' : fingerprintId
	}, callback, 'tracks');
	this.lastfm.api.request('track.getFingerprintMetadata', options);
};

Track.prototype.getInfo = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'track');
	this.lastfm.api.request('track.getInfo', options);
};

Track.prototype.getShouts = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'shouts');
	this.lastfm.api.request('track.getShouts', options);
};

Track.prototype.getSimilar = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'similartracks');
	this.lastfm.api.request('track.getSimilar', options);
};

Track.prototype.getTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'tags');
	this.lastfm.api.request('track.getTags', options);
};

Track.prototype.getTopFans = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topfans');
	this.lastfm.api.request('track.getTopFans', options);
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

Track.prototype.share = function (params, callback) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var options = defaults.defaultOptions(params, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('track.share', options);
};

Track.prototype.unban = function (artist, track, callback) {
	var options = defaults.defaultOptions({
		'artist' : artist,
		'track' : track,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('track.unban', options);
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
