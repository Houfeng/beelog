var query = require('querystring'),
	fs = require('fs'),
	path = require("path"),
	tp = require('./lib/jtp.js'),
	md = require('./lib/markdown.js'),
	config = require('../config.js').config;

var handlers = {
	'post': {
		onService: function(context) {
			//读模板内容，并编译模板。
			var _tpPath = path.join(config.rootDir, '/tps/default/post.tp');
			var _tpContent = fs.readFileSync(_tpPath, 'utf-8');
			var fn = tp.compile(_tpContent);
			//读数据内空
			var _mdPath = path.join(config.rootDir, '/data/' + context.routeData['name'] + '.md');
			var _mdContent = fs.readFileSync(_mdPath, 'utf-8');
			var data = md.toHTML(_mdContent);
			//输出结果
			context.response.write(fn({
				name:'文章',
				content: fn
			}));
		}
	}
};
exports.handlers = handlers;