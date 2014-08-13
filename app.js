//应用程序启动模块
var config = require('./config.js'),
	server = require('./bin/server.js');
server.start(config.port);
