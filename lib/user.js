var defaults = require('./defaults');

var User = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

User.prototype.getArtistTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'artisttracks');
	this.lastfm.api.request('user.getArtistTracks', options);
};

User.prototype.getFriends = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'friends');
	this.lastfm.api.request('user.getFriends', options);
};

User.prototype.getInfo = function (user, callback) {
	if (typeof callback !== 'function') { callback = user; user = null; }
	var params = (user) ? { 'user' : user } : null;
	var options = defaults.defaultOptions(params, callback, 'user');
	if (!params) { options.sk = this.lastfm.sessionCredentials.key; }
	this.lastfm.api.request('user.getInfo', options);
};

User.prototype.getLovedTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'lovedtracks');
	this.lastfm.api.request('user.getLovedTracks', options);
};

User.prototype.getPersonalTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'taggings');
	this.lastfm.api.request('user.getPersonalTags', options);
};

User.prototype.getRecentTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'recenttracks');
	this.lastfm.api.request('user.getRecentTracks', options);
};

User.prototype.getTopAlbums = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topalbums');
	this.lastfm.api.request('user.getTopAlbums', options);
};

User.prototype.getTopArtists = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'topartists');
	this.lastfm.api.request('user.getTopArtists', options);
};

User.prototype.getTopTags = function (user, limit, callback) {
	if (typeof callback !== 'function') { callback = limit; limit = null; }
	var options = defaults.defaultOptions({
		'user' : user,
		'limit' : limit
	}, callback, 'toptags');
	this.lastfm.api.request('user.getTopTags', options);
};

User.prototype.getTopTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'toptracks');
	this.lastfm.api.request('user.getTopTracks', options);
};

User.prototype.getWeeklyAlbumChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklyalbumchart');
	this.lastfm.api.request('user.getWeeklyAlbumChart', options);
};

User.prototype.getWeeklyArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklyartistchart');
	this.lastfm.api.request('user.getWeeklyArtistChart', options);
};

User.prototype.getWeeklyChartList = function (user, callback) {
	var options = defaults.defaultOptions({ 'user' : user }, callback, 'weeklychartlist');
	this.lastfm.api.request('user.getWeeklyChartList', options);
};

User.prototype.getWeeklyTrackChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklytrackchart');
	this.lastfm.api.request('user.getWeeklyTrackChart', options);
};
