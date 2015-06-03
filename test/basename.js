var gulp = require('gulp');
var rename = require('gulp-rename');
var fs = require('fs');
var read = fs.readFileSync;
var basename = require('../');


describe('.url(fn)', function () {
    it('should map urls', function (done) {
        //var out = read('test/url-out.css').toString().trim();
        gulp.src('test/url.css')
            .pipe(basename())
            .pipe(rename('url-out.css'))
            .pipe(gulp.dest('test'))
            .on('end', function () {
                read('test/url-out.css').toString().should.equal(
                    read('test/url-should' +
                        '.css').toString().trim());
                fs.unlinkSync('test/url-out.css');
                done();

            });
    })
})
