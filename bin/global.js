var routeMgr = require('./routeMgr.js').routeMgr,
	handlers = require('./handlers.js').handlers;

var global = {
	onServerStart: function() {
		routeMgr.addRoute({
			pattern: '/post/{name}',
			handler: handlers.post
		});
	},
	onService: function(context) {

	}
};
exports.global = global;
