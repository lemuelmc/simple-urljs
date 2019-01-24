/**
 * Simple URL utility for javascript
 * 
 * @author Lemuel Raganas <lemuel.raganas@gmail.com>
 **/

var LibUrl = require('url');
var Val = require('./val-util');

class SimpleUrljs {

    constructor(url) {
        this.url = url;
        this.libUrl = LibUrl.parse(url);
    }

    searchParam(param) {
        var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(this.url);

        if (Val.isNull(results)) {
            return null;
        }

        return decodeURI(results[1]) || 0;
    }
}

module.exports = SimpleUrljs;