var defaults = require('./defaults');

var Auth = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Auth.prototype.getMobileSession = function (username, password, callback) {
	var options = defaults.defaultOptions({
		'username' : username,
		'password' : password
	}, callback, 'session');
	this.lastfm.api.request('auth.getMobileSession', options);
};

Auth.prototype.getSession = function (token, callback) {
	var options = defaults.defaultOptions({ 'token' : token }, callback, 'session');
	this.lastfm.api.request('auth.getSession', options);
};

Auth.prototype.getToken = function (callback) {
	var options = defaults.defaultOptions({}, callback, 'token');
	this.lastfm.api.request('auth.getToken', options);
};
