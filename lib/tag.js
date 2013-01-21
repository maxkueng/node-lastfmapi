var defaults = require('./defaults');

var Tag = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Tag.prototype.getInfo = function (tag, lang, callback) {
	if (typeof callback !== 'function') { callback = lang; lang = null; }
	var options = defaults.defaultOptions({
		'tag' : tag,
		'lang' : lang
	}, callback, 'tag');
	this.lastfm.api.request('tag.getInfo', options);
};

Tag.prototype.getSimilar = function (tag, callback) {
	var options = defaults.defaultOptions({ 'tag' : tag }, callback, 'similartags');
	this.lastfm.api.request('tag.getSimilar', options);
};

Tag.prototype.getTopAlbums = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topalbums');
	this.lastfm.api.request('tag.getTopAlbums', options);
};

Tag.prototype.getTopArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('tag.getTopArtists', options);
};

Tag.prototype.getTopTags = function (callback) {
	var options = defaults.defaultOptions(null, callback, 'toptags');
	this.lastfm.api.request('tag.getTopTags', options);
};

Tag.prototype.getTopTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('tag.getTopTracks', options);
};

Tag.prototype.getWeeklyArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklyartistchart');
	this.lastfm.api.request('tag.getWeeklyArtistChart', options);
};

Tag.prototype.getWeeklyChartList = function (tag, callback) {
	var options = defaults.defaultOptions({ 'tag' : tag }, callback, 'weeklychartlist');
	this.lastfm.api.request('tag.getWeeklyChartList', options);
};

Tag.prototype.search = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'results');
	this.lastfm.api.request('tag.search', options);
};
