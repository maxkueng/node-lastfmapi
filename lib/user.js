var defaults = require('./defaults');

var User = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

User.prototype.getArtistTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'artisttracks');
	this.lastfm.api.request('user.getArtistTracks', options);
};

User.prototype.getBannedTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'bannedtracks');
	this.lastfm.api.request('user.getBannedTracks', options);
};

User.prototype.getEvents = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('user.getEvents', options);
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

User.prototype.getNeighbours = function (user, limit, callback) {
	if (typeof callback !== 'function') { callback = limit; limit = null; }
	var options = defaults.defaultOptions({
		'user' : user,
		'limit' : limit
	}, callback, 'neighbours');
	this.lastfm.api.request('user.getNeighbours', options);
};

User.prototype.getNewReleases = function (user, useRecs, callback) {
	if (typeof callback !== 'function') { callback = useRecs; useRecs = null; }
	var options = defaults.defaultOptions({
		'user' : user,
		'userecs' : useRecs
	}, callback, 'albums');
	this.lastfm.api.request('user.getNewReleases', options);
};

User.prototype.getPastEvents = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('user.getPastEvents', options);
};

User.prototype.getPersonalTags = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'taggings');
	this.lastfm.api.request('user.getPersonalTags', options);
};

User.prototype.getPlaylists = function (user, callback) {
	var options = defaults.defaultOptions({ 'user' : user }, callback, 'playlists');
	this.lastfm.api.request('user.getPlaylists', options);
};

// TODO: FIX LASTFM-NODE
User.prototype.getRecentStations = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'recentstations');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('user.getRecentStations', options);
};

User.prototype.getRecentTracks = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'recenttracks');
	this.lastfm.api.request('user.getRecentTracks', options);
};

// TODO: FIX LASTFM-NODE
User.prototype.getRecommendedArtists = function (params, callback) {
	if (typeof callback !== 'function') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'recommendations');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('user.getRecommendedArtists', options);
};

// TODO: FIX LASTFM-NODE
User.prototype.getRecommendedEvents = function (params, callback) {
	if (typeof callback !== 'function') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'events');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('user.getRecommendedEvents', options);
};

User.prototype.getShouts = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'shouts');
	this.lastfm.api.request('user.getShouts', options);
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

User.prototype.shout = function (user, message, callback) {
	var options = defaults.defaultOptions({
		'user' : user,
		'message' : message,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('user.shout', options);
};
