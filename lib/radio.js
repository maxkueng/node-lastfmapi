var defaults = require('./defaults');

var Radio = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Radio.prototype.getPlaylist = function (params, callback) {
	if (typeof callback === 'undefined') { callback = params; params = null; }
	var options = defaults.defaultOptions(params, callback, 'playlist');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('radio.getPlaylist', options);
};

Radio.prototype.search = function (name, callback) {
	var options = defaults.defaultOptions({ 'name' : name }, callback, 'stations');
	this.lastfm.api.request('radio.search', options);
};

Radio.prototype.tune = function (station, lang, callback) {
	if (typeof callback !== 'function') { callback = lang; lang = null; }
	var options = defaults.defaultOptions({
		'station' : station,
		'lang' : lang
	}, callback, 'station');
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('radio.tune', options);
};
