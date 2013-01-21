var defaults = require('./defaults');

var Geo = module.exports = function (lastfm) { this.lastfm = lastfm; };

Geo.prototype.getEvents = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('geo.getEvents', options);
};

Geo.prototype.getMetroArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('geo.getMetroArtistChart', options);
};

Geo.prototype.getMetroHypeArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('geo.getMetroHypeArtistChart', options);
};

Geo.prototype.getMetroHypeTrackChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('geo.getMetroHypeTrackChart', options);
};

Geo.prototype.getMetroTrackChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('geo.getMetroTrackChart', options);
};

Geo.prototype.getMetroUniqueArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('geo.getMetroUniqueArtistChart', options);
};

Geo.prototype.getMetroUniqueTrackChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('geo.getMetroUniqueTrackChart', options);
};

Geo.prototype.getMetroWeeklyChartlist = function (metro, callback) {
	var options = defaults.defaultOptions({ 'metro' : metro }, callback, 'weeklychartlist');
	this.lastfm.api.request('geo.getMetroWeeklyChartlist', options);
};

Geo.prototype.getMetros = function (country, callback) {
	if (typeof callback === 'undefined') { callback = country; country = null; }
	var params = null;
	if (country) { params = { 'country' : country }; }
	var options = defaults.defaultOptions(params, callback, 'metros');
	this.lastfm.api.request('geo.getMetros', options);
};

Geo.prototype.getTopArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('geo.getTopArtists', options);
};

Geo.prototype.getTopTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('geo.getTopTracks', options);
};
