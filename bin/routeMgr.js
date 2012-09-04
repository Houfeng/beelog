/**
 * 引入库
 */
var url = require('url'),
	path = require("path");
var fileHandler = require('./handlers/file.js');

/**
 * 路由控制器，负责路由的模式匹配分发，路由数据的处理。
 * @type {Object}
 */

(function(owner) {
	owner.routes = [];
	owner.placeHolderExp = new RegExp('\{.+?\}', 'gim');
	/**
	 * 添加一个路由
	 * @param {Route} route 一个路由实体,格式:{pattern:'',handler:object}
	 */
	owner.addRoute = function(route) {
		if (route && route.pattern && route.handler) {
			owner.placeHolderExp.lastIndex = 0;
			var matchString = '^' + route.pattern.replace(owner.placeHolderExp, '([^\\/]+)') + '$';
			route.matchExp = new RegExp(matchString, 'gim');
			route.routeKeys = route.pattern.match(owner.placeHolderExp) || [];
			for (var i = 0; i < route.routeKeys.length; i++) {
				route.routeKeys[i] = route.routeKeys[i].replace('{', '').replace('}', '');
			};
			owner.routes.push(route);
			console.log('添加路由:"' + route.pattern + '"成功');
		}
	};
	/**
	 * 通过请求路径获取第一个匹配的路由
	 * @param  {String} pathName 请求路径
	 * @return {Route}           路由实体
	 */
	owner.getRoute = function(pathName) {
		for (var i = 0; i < owner.routes.length; i++) {
			var route = owner.routes[i];
			var logText = '路径:"' + pathName + '"匹配:"' + route.pattern + '"';
			route.matchExp.lastIndex = 0;
			if (route.matchExp.test(pathName)) {
				route.routeData = {};
				route.matchExp.lastIndex = 0;
				var routeValues = pathName.match(route.matchExp);
				for (var j = 0; j < route.routeKeys.length; j++) {
					var routeVal = RegExp['$' + (j + 1)];
					if (routeVal) {
						route.routeData[route.routeKeys[j]] = routeVal;
						console.log(route.routeKeys[j] + ":" + routeVal);
					}
				};
				console.log(logText + '成功');
				return route;
			} else {
				console.log(logText + '失败');
			}
		}
	};
	/**
	 * 请求处理函数，每一个请求都将触发onService
	 * @param  {HttpContext} context 请求上下文对象
	 * @return {void}         		 无返回值
	 */
	owner.onService = function(context) {
		var requestUrl = decodeURI(context.request.url);
		var pathName = url.parse(requestUrl).pathname;
		var filePath = path.join(config.rootDir, pathName);
		if (path.existsSync(filePath)) {
			var route = owner.getRoute(pathName);
			if (route != null) {
				context.routeData = route.routeData;
				route.handler.onService(context);
			}
		} else {
			fileHandler.onService(context);
		}
		context.response.end();
	};
	owner.handleFile = function() {

	};
	owner.handle404=function(){

	};
})(exports);