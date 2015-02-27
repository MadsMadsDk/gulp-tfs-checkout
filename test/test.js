var assert = require('assert');
var tfs = require('tfs-unlock');
var gutil = require('gulp-util');
var through = require('through2');
var prefixer = require('../');

describe('gulp-tfs-checkout', function(){
  it('should return true if file is empty', function(done){
    
    var fakeFile = new gutil.File({
      path: '/this/file/is/empty'
    });

    var testPrefixer = prefixer();

    testPrefixer.write(fakeFile);

    testPrefixer.once('data', function(file) {
      assert.equal(file.isNull(), true);
      done();
    });

  });
});