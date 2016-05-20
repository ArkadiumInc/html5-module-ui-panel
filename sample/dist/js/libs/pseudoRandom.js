/**
 * Created by Stas on 11/12/2014.
 */
var PseudoRandom = function(seed){
    "use strict";
    this.randomizer = new Phaser.RandomDataGenerator(seed);
};
PseudoRandom.MAX_INT32 = Math.pow(2,32) - 1;
PseudoRandom.prototype = {
    next32:function(){
        "use strict";
        return Math.floor(this.randomizer.integer());
    },
    getNextRandomBytes:function(b){
        "use strict";
        var retVal = [b];
        for(var i = b - 1; i >= 0; i--)
        {
            retVal[i] = this.next32();
        }
        return retVal;
    },
    getNextRandomBytesAsString:function(b){
        "use strict";
        var bytes = this.getNextRandomBytes(b);
        var result = "";
        for(var i = 0; i<bytes.length;i++)
        {
            result += bytes[i];
        }
        return result;
    }
};
module.exports = PseudoRandom;