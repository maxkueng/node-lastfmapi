var defaults = require('./defaults');

var Group = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Group.prototype.getHype = function (group, callback) {
	var options = defaults.defaultOptions({ 'group' : group }, callback, 'weeklyartistchart');
	this.lastfm.api.request('group.getHype', options);
};

Group.prototype.getMembers = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'members');
	this.lastfm.api.request('group.getMembers', options);
};

Group.prototype.getWeeklyAlbumChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklyalbumchart');
	this.lastfm.api.request('group.getWeeklyAlbumChart', options);
};

Group.prototype.getWeeklyArtistChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklyartistchart');
	this.lastfm.api.request('group.getWeeklyArtistChart', options);
};

Group.prototype.getWeeklyChartList = function (group, callback) {
	var options = defaults.defaultOptions({ 'group' : group }, callback, 'weeklychartlist');
	this.lastfm.api.request('group.getWeeklyChartList', options);
};

Group.prototype.getWeeklyTrackChart = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'weeklytrackchart');
	this.lastfm.api.request('group.getWeeklyTrackChart', options);
};
