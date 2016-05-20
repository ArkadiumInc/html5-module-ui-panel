var SaveCPU = require("../Plugins/SaveCPU");
var FPSMeter = require("../Plugins/FPSMeter");
var Boot = function () {
};

Boot.prototype = {

    preload: function () {
        "use strict";
        console.log("boot started");
        //JSGameAdapt.Initialize('6d702868-43ea-436b-a461-f288576cd364', 'a880bf88-9f00-4d03-8c23-096130df9bb5', 'http://adapt.as.arkadiumhosted.com/', true);
        this.game.stage.setBackgroundColor("0xffffff");
    },

    create: function () {
        "use strict";
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        console.log(this.game.scale.height);
        console.log(this.game.scale.width);
        this.game.plugins.add(SaveCPU);
        //this.game.plugins.add(FPSMeter);
        this.game.state.start('Preloader');
    }
};

module.exports = Boot;
