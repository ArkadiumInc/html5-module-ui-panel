/**
 * Created by klimashevsky
 */
var PanelManagerModule = require("arkadium-panelmanager-test");
var GameSettings = require("../GameSettings");
function SamplePanel(game, guiBuilder) {
    'use strict';
    PanelManagerModule.Panel.call(this, game, guiBuilder);
    
}
SamplePanel.NAME = 'SamplePanel';

SamplePanel.prototype = Object.create(PanelManagerModule.Panel.prototype);
SamplePanel.prototype.constructor = SamplePanel;
module.exports = SamplePanel;

SamplePanel.prototype.build = function() {
    'use strict';
    PanelManagerModule.Panel.prototype.build.call(this);
    this.img = new Phaser.Image(this._game,0,0,'gameBackground');
    this.addChild(this.img);

    this.label = new Phaser.BitmapText(this._game, 0, 0, GameSettings.mediumFont, "100", 56);
    this.label.text = "Sample Panel "+ this._data.customData;

    this.label.y = 100;

    this.addChild(this.label);

    console.log("I was Created",this._data.customData);

};

SamplePanel.prototype.destroy= function()
{

    "use strict";
    this.removeChild(this.img,true)
    this.removeChild(this.label,true)
    PanelManagerModule.Panel.prototype.destroy.call(this);
};

SamplePanel.prototype.createShowTransition = function() {
    'use strict';
    return new PanelManagerModule.ShowTransitionMovement(this._game, this, 0, -1000, 0, 0, 500, Phaser.Easing.Linear.None);
};

SamplePanel.prototype.createHideTransition = function() {
    'use strict';
    return new PanelManagerModule.HideTransitionMovement(this._game, this, this.x, this.y - 1000, 500, Phaser.Easing.Linear.None);
};

