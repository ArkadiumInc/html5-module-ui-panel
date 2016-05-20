/**
 * A FPS meter Plugin that integrates statjs into phaser js behavior
 * you need https://github.com/mrdoob/stats.js/ in order to make this plugin work properly
 */
var Stats = require("./Stats");
Phaser.Plugin.FPSMeter = function (game, parent) {
    Phaser.Plugin.call(this, game, parent);
    this.enableStats();
};
// Extends the Phaser.Plugin template, setting up values we need
Phaser.Plugin.FPSMeter.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.FPSMeter.prototype.constructor = Phaser.Plugin.FPSMeter;
/**
 * This is run when the plugins update during the core game loop.
 */
Phaser.Plugin.FPSMeter.prototype.preUpdate = function () {
    this.Stats.begin();
};
Phaser.Plugin.FPSMeter.prototype.postUpdate = function () {
    this.Stats.end();
};
Phaser.Plugin.FPSMeter.prototype.enableStats = function(){
    this.Stats = new Stats();
    this.Stats.setMode(0); // 0: fps, 1: ms

    // align top-left
    this.Stats.domElement.style.position = 'absolute';
    this.Stats.domElement.style.left = '0px';
    this.Stats.domElement.style.top = '0px';
    document.body.appendChild( this.Stats.domElement );
};
module.exports = Phaser.Plugin.FPSMeter;
/**
 * Created by Stas on 12/1/2014.
 */
