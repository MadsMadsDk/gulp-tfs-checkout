const assert = require("assert");
const tfs = require("tfs-unlock");
const gutil = require("gulp-util");
const through = require("through2");
const prefixer = require("../");

describe("gulp-tfs-checkout", function() {
  it("should return true if file is empty", function(done) {
    const fakeFile = new gutil.File({
      path: "/this/file/is/empty"
    });

    const testPrefixer = prefixer();

    testPrefixer.write(fakeFile);

    testPrefixer.once("data", function(file) {
      assert.equal(file.isNull(), true);
      done();
    });
  });
});
