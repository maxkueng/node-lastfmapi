var defaults = require('./defaults');

var Playlist = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Playlist.prototype.addTrack = function (playlistId, artist, track, callback) {
	var options = defaults.defaultOptions({
		'playlistID' : playlistId,
		'artist' : artist,
		'track' : track
	}, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('playlist.addTrack', options);
};

Playlist.prototype.create = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'playlists');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('playlist.create', options);
};
