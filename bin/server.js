/**
 * 引入依赖的模块
 */
var sys = require('sys'),
	http = require('http'),
	config = require('../config.js'),
	routeMgr = require('./routeMgr.js'),
	global = require('./global.js');


(function(owner) {
	/**
	 * 启动服务
	 * @param  {int} _port  端口
	 * @return {void}       无返回值 
	 */
	owner.start = function(_port) {
		global.onServerStart();
		http.createServer(function(_request, _response) {
			var context = {
				request: _request,
				response: _response
			};
			global.onService(context);
			routeMgr.onService(context);
		}).listen(_port);
		console.log("服务已启动,端口:" + _port);
	};
})(exports);