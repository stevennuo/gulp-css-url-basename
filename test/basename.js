var gulp = require('gulp');
var rename = require('gulp-rename');
var fs = require('fs');
var read = fs.readFileSync;
var basename = require('../');


describe('.url(fn)', function () {
    it('should map urls use path.normalize', function (done) {
        //var out = read('test/url-out.css').toString().trim();
        gulp.src('test/url.css')
            .pipe(basename({prefix: 'dist//assets', normalize: true}))
            .pipe(rename('url-out.css'))
            .pipe(gulp.dest('test'))
            .on('end', function () {
                read('test/url-out.css').toString().should.equal(
                    read('test/url-should' +
                        '.css').toString().trim());
                fs.unlinkSync('test/url-out.css');
                done();
            });
    });
    it('should map urls not use normalize', function (done) {
    //var out = read('test/url-out.css').toString().trim();
        gulp.src('test/url.css')
            .pipe(basename({prefix: 'http://assets', normalize: false}))
            .pipe(rename('url-out.css'))
            .pipe(gulp.dest('test'))
            .on('end', function () {
                read('test/url-out.css').toString().should.equal(
                    read('test/url-without-normalize' +
                        '.css').toString().trim());
                fs.unlinkSync('test/url-out.css');
                done();
            });
    });
})