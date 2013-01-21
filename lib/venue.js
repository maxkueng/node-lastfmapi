var defaults = require('./defaults');

var Venue = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Venue.prototype.getEvents = function (venueId, festivalsOnly, callback) {
	if (typeof callback !== 'function') { callback = festivalsOnly; festivalsOnly = null; }
	var options = defaults.defaultOptions({
		'venue' : venueId,
		'festivalsonly' : festivalsOnly
	}, callback, 'events');
	this.lastfm.api.request('venue.getEvents', options);
};

Venue.prototype.getPastEvents = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'events');
	this.lastfm.api.request('venue.getPastEvents', options);
};

Venue.prototype.search = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'results');
	this.lastfm.api.request('venue.search', options);
};
