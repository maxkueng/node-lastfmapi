var defaults = require('./defaults');

var Chart = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Chart.prototype.getHypedArtists = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'artists');
	this.lastfm.api.request('chart.getHypedArtists', options);
};

Chart.prototype.getHypedTracks = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'tracks');
	this.lastfm.api.request('chart.getHypedTracks', options);
};

Chart.prototype.getLovedTracks = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'tracks');
	this.lastfm.api.request('chart.getLovedTracks', options);
};

Chart.prototype.getTopArtists = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'artists');
	this.lastfm.api.request('chart.getTopArtists', options);
};

Chart.prototype.getTopTags = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'tags');
	this.lastfm.api.request('chart.getTopTags', options);
};

Chart.prototype.getTopTracks = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'tracks');
	this.lastfm.api.request('chart.getTopTracks', options);
};
