# gulp-tfs-checkout
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]



## Installation
```bash
$ npm install gulp-tfs-checkout
```

## Usage

Based on the node-package [tfs-unlock](https://www.npmjs.com/package/tfs-unlock).

```js
var gulp = require('gulp');
var tfs = require('gulp-tfs-checkout');

gulp.task('checkout', function() {
    return gulp.src([
            'Website/Layout/js/*',
            'Website/Layout/css/*'
        ])
        .pipe(tfs());
});

// Add 'checkout' task as dependency to other tasks

gulp.task('sass', ['checkout'], function() {
    ...
});

// Or run it as a default task
gulp.task('default', ['checkout', '...', '...', '...']);

```

## Why?
I was tired of having to checkout files that were going to be manipulated manually.
The npm package 'tfs-unlock' can't parse a directory, so I wrote this little plugin that can parse a directory, and performs the tfs-task on each file.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/gulp-tfs-checkout.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-tfs-checkout
[travis-image]: https://img.shields.io/travis/MadsMadsDk/gulp-tfs-checkout.svg?style=flat-square
[travis-url]: https://travis-ci.org/MadsMadsDk/gulp-tfs-checkout
[coveralls-image]: https://img.shields.io/coveralls/MadsMadsDk/gulp-tfs-checkout.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/MadsMadsDk/gulp-tfs-checkout?branch=master
[downloads-image]: http://img.shields.io/npm/dm/gulp-tfs-checkout.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gulp-tfs-checkout
