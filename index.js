'use strict';

// through2 is a thin wrapper around node transform streams
var gutil = require('gulp-util');
var through = require('through2');
var tfs = require('tfs-unlock');
var PluginError = gutil.PluginError;

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-tfs-checkout', 'Streaming not supported'));
			return;
		}

		try {
			tfs.init();
			tfs.checkout([file.path]).then(function () {
        gutil.log('Checked out file "' + file.path + '"');
        cb();
      }, function () {
        this.emit('error', new gutil.PluginError('gulp-tfs-checkout', null, {fileName: file.path}));
        cb();
      });
			
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-tfs-checkout', err, {fileName: file.path}));
		}
	});
};