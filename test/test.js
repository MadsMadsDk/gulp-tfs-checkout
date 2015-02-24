var assert = require('assert');
var tfs = require('tfs-unlock');
var File = require('vinyl');
var prefixer = require('../');

describe('gulp-tfs-checkout', function(){
  describe('in buffer mode', function(){
    it('should return true if value is a string', function(done){
      
      var fakeFile = new File({
      	path: 'this/is/the/path'
      });

      var testPrefixer = prefixer();

      testPrefixer.write(fakeFile);

      testPrefixer.once('data', function(file) {
      	assert.equal(typeof(file.path), 'string');
      	done();
      });

    });
  });
});