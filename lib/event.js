var defaults = require('./defaults');

var Event = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Event.prototype.attend = function (eventId, status, callback) {
	var options = defaults.defaultOptions({
		'event' : eventId,
		'status' : status,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('event.attend', options);
};

Event.prototype.getAttendees = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'attendees');
	this.lastfm.api.request('event.getAttendees', options);
};

Event.prototype.getInfo = function (eventId, callback) {
	var options = defaults.defaultOptions({ 'event' : eventId }, callback, 'event');
	this.lastfm.api.request('event.getInfo', options);
};

Event.prototype.getShouts = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'shouts');
	this.lastfm.api.request('event.getShouts', options);
};

Event.prototype.share = function (params, callback) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var options = defaults.defaultOptions(params, callback);
	options.sk = this.lastfm.sessionCredentials.key;
	this.lastfm.api.request('event.share', options);
};

Event.prototype.shout = function (eventId, message, callback) {
	var options = defaults.defaultOptions({
		'event' : eventId,
		'message' : message,
		'sk' : this.lastfm.sessionCredentials.key
	}, callback);
	this.lastfm.api.request('event.shout', options);
};
