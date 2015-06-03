# gulp-css-url-basename
====================

[![Build Status](https://travis-ci.org/stevennuo/gulp-css-url-basename.svg?branch=master)](https://travis-ci.org/stevennuo/gulp-css-url-basename)

Gulp plugin for mapping `url()` calls. Skip the encoded ones, and replace path in rest `url()`s with basename(Unix).

```js
var basename = require('gulp-css-url-basename');
gulp.src('test/url.css')
            .pipe(basename())
            .pipe(rename('url-out.css'))
            .pipe(gulp.dest('test'))
```

origin:

```css
body {
  background: url(/assets/bg.png);
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../fonts/glyphicons-halflings-regular.eot');
}
.icon {
  background-image: url("data:image/png;base64,blablabla");
}
```

yields:

```css
body {
  background: url("bg.png");
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url("glyphicons-halflings-regular.eot");
}
.icon {
  background-image: url("data:image/png;base64,blablabla");
}
```