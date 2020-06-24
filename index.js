// through2 is a thin wrapper around node transform streams
const PluginError = require("plugin-error");
const through = require("through2");
const tfs = require("tfs-unlock");
const colors = require("ansi-colors");
const log = require("fancy-log");

module.exports = function(opts) {
  opts = opts || {};
  opts.tfsUnlockSettings = opts.tfsUnlockSettings || {};

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new PluginError("gulp-tfs-checkout", "Streaming not supported"));
      return;
    }

    try {
      tfs.init(opts.tfsUnlockSettings);
      tfs.checkout([file.path]).then(
        function() {
          log('Checked out file "' + file.path + '"');
          cb(null, file);
        },
        function(error) {
          log(
            colors.yellow(
              "Warning: Unable to checkout: " +
                file.path +
                " - Check that this file is under source control and tf.exe works properlly with this file."
            )
          );
          cb(null, file);
        }
      );
    } catch (err) {
      this.emit(
        "error",
        new PluginError("gulp-tfs-checkout", err, { fileName: file.path })
      );
    }
  });
};
