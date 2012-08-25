/**
 * 引入依赖的模块
 */
var sys = require('sys'),
	http = require('http'),
	config = require('../config.js').config,
	routeMgr = require('./routeMgr.js').routeMgr,
	global = require('./global.js').global;

/**
 * HTTP Server 
 * @type {Object}
 */
var server = {
	/**
	 * 启动服务
	 * @return {void} 无返回值 
	 */
	start: function() {
		global.onServerStart();
		http.createServer(function(_request, _response) {
			var context = {
				request: _request,
				response: _response
			};
			global.onService(context);
			routeMgr.onService(context);
		}).listen(config.port);
		console.log("服务已启动,端口:" + config.port);
	}
};
server.start();

