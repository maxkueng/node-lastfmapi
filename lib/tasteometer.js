var defaults = require('./defaults');

var Tasteometer = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Tasteometer.prototype.compare = function (params, callback) {
	var options = defaults.defaultOptions(params, callback, 'comparison');
	this.lastfm.api.request('tasteometer.compare', options);
};
