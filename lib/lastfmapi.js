var url = require('url');
var defaults = require('./defaults');
var lastfm = require('lastfm');
var LastFmNode = require('lastfm').LastFmNode;

var Album = require('./album');
var Artist = require('./artist');
var Auth = require('./auth');
var Chart = require('./chart');
var Geo = require('./geo');
var Library = require('./library');
var Tag = require('./tag');
var Track = require('./track');
var User = require('./user');

var LastfmAPI = module.exports = function (options) {
	this.api = new LastFmNode(options);
	this.sessionCredentials = null;

	this.album = new Album(this);
	this.artist = new Artist(this);
	this.auth = new Auth(this);
	this.chart = new Chart(this);
	this.geo = new Geo(this);
	this.library = new Library(this);
	this.tag = new Tag(this);
	this.track = new Track(this);
	this.user = new User(this);
};

LastfmAPI.prototype.getAuthenticationUrl = function (params) {
	if (!params) params = {};
	var baseUrl = 'http://www.last.fm/api/auth',
	    urlParts = url.parse(baseUrl);

	urlParts.query = {};;
	urlParts.query.api_key = this.api.api_key;
	if (params.cb) { urlParts.query.cb = params.cb; }
	if (params.token) { urlParts.query.token = params.token; }

	return url.format(urlParts);
};

LastfmAPI.prototype.setSessionCredentials = function (username, key) {
	this.sessionCredentials = {
		'username' : username,
		'key' : key
	};
};

LastfmAPI.prototype.authenticate = function (token, callback) {
	if (typeof callback !== 'function') { callback = function () {}; }
	var self = this;

	this.auth.getSession(token, function (err, session) {
		if (err) { return callback(err); }
		if (!session.key) { return callback(new Error('Something fishy')); }

		self.setSessionCredentials(session.name, session.key);
		callback(null, self.sessionCredentials);
	});
};
