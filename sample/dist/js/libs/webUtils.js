/**
 * Created by Stas on 11/7/2014.
 */
if (typeof ARK_gameJQ === 'undefined' && typeof jQuery !== 'undefined') {
    ARK_gameJQ = $;
}

WebUtils = {};
WebUtils = {
    isIOS: function () {
        return (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
    },
    isAndroid: function () {
        return (navigator.userAgent.match(/Android/i) ? true : false );
    },
    isWebkitBrowser: function () {
        return (navigator.userAgent.match(/AppleWebKit/i) ? true : false );
    },
    isChromeBrowser: function () {
        return (navigator.userAgent.match(/\) Chrome/i) ? true : false );
    },
    hasRetinaDisplay: function () {
        if (WebUtils.isIOS() && window.devicePixelRatio && window.devicePixelRatio > 1) {
            return true;
        }
        return false;
    },
    getBrowserName: function () {
        var N = navigator.appName.toLowerCase(), ua = navigator.userAgent, tem;
        if (N === 'netscape' && ua.match(/trident/i) && ua.match(/rv:\d+/i)) {
            return 'msie';
        }
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
            M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M[0].toLowerCase();
    }
//    function isIOS() {
//    return (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
//}
//
//function isAndroid() {
//    return (navigator.userAgent.match(/Android/i) ? true : false );
//}
//
//function isWebkitBrowser() {
//    return (navigator.userAgent.match(/AppleWebKit/i) ? true : false );
//}
//
//function isChromeBrowser() {
//    return (navigator.userAgent.match(/\) Chrome/i) ? true : false );
//}
//
//function hasRetinaDisplay() {
//    if (isIOS() && window.devicePixelRatio && window.devicePixelRatio > 1) {
//        return true;
//    }
//    return false;
//}
};
Array.prototype.clear = function() {
    "use strict";
    while (this.length > 0) {
        this.pop();
    }
};