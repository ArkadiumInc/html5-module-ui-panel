var Utils = {
    containsObject: function(obj, list) {
        "use strict";
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    },

    constrain: function(min, value, max) {
        "use strict";
        return Math.max(min, Math.min(value, max));
    },

    cloneObject: function(obj) {
        "use strict";
        if (obj === null || typeof(obj) !== "object") {
            return obj;
        }

        var temp = obj.constructor(); // changed
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                temp[key] = this.cloneObject(obj[key]);
            }
        }
        return temp;
    },

    convertMStoTime: function(ms) {
        "use strict";
        var mins = Math.floor(ms / 60000);
        var secs = Math.floor(ms / 1000) % 60;
        var secString = (secs > 9) ? ("" + secs) : ("0" + secs);
        return mins + ":" + secString;
    },

    countNumDigits: function(n) {
        "use strict";
        var numDigits = 0;
        while (n>=1) {
            n /= 10;
            ++numDigits;
        }
        return numDigits;
    },

    doesFileExist: function(urlToFile)
    {
        "use strict";
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();
        if (xhr.status == "404") {//this needs to be a ==
            return false;
        } else {
            return true;
        }
    }
};

module.exports = Utils;