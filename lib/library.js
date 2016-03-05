var defaults = require('./defaults');

var Library = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Library.prototype.getArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'artists');
	this.lastfm.api.request('library.getArtists', options);
};
