var query = require('querystring'),
	fs = require('fs'),
	path = require("path"),
	tp = require('../lib/jtp.js'),
	md = require('../lib/markdown.js'),
	config = require('../../config.js');

(function(owner) {
	owner.onService = function(context) {
		//输出结果
		context.response.write('你好中国');
	};
})(exports);