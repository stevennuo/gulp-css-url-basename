var path = require('path');

var plugin = require('rework-plugin-function');
var rework = require('gulp-rework');

var isEncoded = function (url) {
    return url.indexOf('data:') === 0
}

module.exports = function (options) {
    return rework(plugin({
        url: function (url) {
            if (!isEncoded(url)) {
                // remove " & '
                url = url.split('"').join('').split('\'').join('');
                // get basename
                url = path.basename(path.normalize(url));
                if(options.prefix){
                    url = path.join(path.normalize(options.prefix),url);
                }
            }
            return 'url("' + url.trim() + '")';
        }
    }, false));
}


