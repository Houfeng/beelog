var config = require('./config.js'),
	server = require('./bin/server.js');
server.start(config.port);