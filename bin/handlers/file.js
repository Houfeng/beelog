var query = require('querystring'),
	fs = require('fs'),
	url = require('url'),
	path = require("path"),
	tp = require('../lib/jtp.js'),
	md = require('../lib/markdown.js'),
	config = require('../../config.js');

(function(owner) {
	owner.onService = function(context) {
		var requestUrl = decodeURI(context.request.url);
		var pathName = url.parse(requestUrl).pathname;

		var _path = path.join(config.rootDir, pathName);
		if (path.existsSync(_path)) {
			var _content = fs.readFileSync(_path);
			context.response.write(_content);
		} else {
			context.response.writeHead('404', {
				'Content-Type': 'text/html; charset=UTF-8'
			});
			context.response.write('404 ' + pathName);
		}
	};
})(exports);