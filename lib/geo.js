var defaults = require('./defaults');

var Geo = module.exports = function (lastfm) { this.lastfm = lastfm; };

Geo.prototype.getTopArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('geo.getTopArtists', options);
};

Geo.prototype.getTopTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'tracks');
	this.lastfm.api.request('geo.getTopTracks', options);
};
