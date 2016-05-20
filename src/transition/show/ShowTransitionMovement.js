/**
 * Created by JIocb on 2/4/2016.
 */
var BaseTransition = require('./../BaseTransition');
var ShowTransitionMovement = function (game, panel, fromX, fromY, toX, toY, timeInMsc, easing)
{
    'use strict';
    BaseTransition.call(this, game,panel);
    this._fromX = fromX;
    this._fromY = fromY;
    this._toX = toX;
    this._toY = toY;
    this._timeInMsc = timeInMsc || 100;
    this._easing = easing || Phaser.Easing.Linear.None;
};

// ========== Prototype =========
ShowTransitionMovement.prototype = Object.create(BaseTransition);
ShowTransitionMovement.prototype.constructor = ShowTransitionMovement;
module.exports = ShowTransitionMovement;


ShowTransitionMovement.prototype.start = function(callBack, callBackContext) {
    'use strict';
    this._callBack = callBack;
    this._callBackContext = callBackContext;
    this._panel.y = this._fromY;
    this._panel.x = this._fromX;

    this._tween = this._game.add.tween(this._panel);
    this._tween.onComplete.add(this._callBack, this._callBackContext);
    this._panel.x = this._fromX;
    this._panel.y = this._fromY;
    this._tween.to({ x : this._toX, y : this._toY}, this._timeInMsc, this._easing);
    this._tween.start();

};


ShowTransitionMovement.prototype.destroy = function()
{
    'use strict';
    this._callBack = null;
    this._callBackContext = null;
    if(this._tween)
    {
        this._tween.pause();
    }
    this._game.tweens.remove(this._tween);
};
