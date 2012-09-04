var routeMgr = require('./routeMgr.js'),
	handlers = {
		'index': require('./handlers/index.js'),
		'post': require('./handlers/post.js')
	};

(function(owner) {
	/**
	 * 在服务器启动时
	 * @return {void} 无返回值
	 */
	owner.onServerStart = function() {
		//添加首页路由
		routeMgr.addRoute({
			pattern: '/',
			handler: handlers.index
		});
		//添加文章查看页路由
		routeMgr.addRoute({
			pattern: '/post/{name}',
			handler: handlers.post
		});
	};
	/**
	 * 在有新客户端请求时
	 * @param  {HttpContext} context 请求上下文件
	 * @return {void}           	 无返回值
	 */
	owner.onService = function(context) {

	};
})(exports);