/**
 * 引入库
 */
var url = require('url'),
	path = require("path");

/**
 * 路由控制器，负责路由的模式匹配分发，路由数据的处理。
 * @type {Object}
 */
var routeMgr = {
	routes: [],
	placeHolderExp: new RegExp('\{.+?\}', 'gim'),
	/**
	 * 添加一个路由
	 * @param {Route} route 一个路由实体,格式:{pattern:'',handler:object}
	 */
	addRoute: function(route) {
		if (route && route.pattern && route.handler) {
			routeMgr.placeHolderExp.lastIndex = 0;
			var matchString = '^' + route.pattern.replace(routeMgr.placeHolderExp, '([^\\/]+)') + '$';
			route.matchExp = new RegExp(matchString, 'gim');
			route.routeKeys = route.pattern.match(routeMgr.placeHolderExp) || [];
			for (var i = 0; i < route.routeKeys.length; i++) {
				route.routeKeys[i] = route.routeKeys[i].replace('{', '').replace('}', '');
			};
			routeMgr.routes.push(route);
			console.log('添加路由:"' + route.pattern + '"成功');
		}
	},
	/**
	 * 通过请求路径获取第一个匹配的路由
	 * @param  {String} pathName 请求路径
	 * @return {Route}           路由实体
	 */
	getRoute: function(pathName) {
		for (var i = 0; i < routeMgr.routes.length; i++) {
			var route = routeMgr.routes[i];
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
	},
	/**
	 * 请求处理函数，每一个请求都将触发onService
	 * @param  {HttpContext} context 请求上下文对象
	 * @return {void}         		 无返回值
	 */
	onService: function(context) {
		var requestUrl = decodeURI(context.request.url);
		var pathName = url.parse(requestUrl).pathname;
		var route = routeMgr.getRoute(pathName);
		if (route != null) {
			context.response.writeHead('200', {
				'Content-Type': 'text/html; charset=UTF-8'
			});
			context.routeData = route.routeData;
			route.handler.onService(context);
			context.response.end('');
		} else {
			context.response.writeHead('404', {
				'Content-Type': 'text/html; charset=UTF-8'
			});
			context.response.end('404 error in "' + requestUrl+'"');
			}
		}
	};

	/*以下是导出函数*/
	exports.routeMgr = routeMgr;
	exports.addRoute = routeMgr.addRoute;
	exports.onService = routeMgr.onService;