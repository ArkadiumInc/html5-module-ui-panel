/**
 * Created by JIocb on 2/4/2016.
 */
var BaseTransition = require('./../BaseTransition');

var HideTransitionMovement = function (game, panel, toX, toY, timeInMsc, easing)
{
    'use strict';
    BaseTransition.call(this, game,panel);
    this._toX = toX;
    this._toY = toY;
    this._timeInMsc = timeInMsc || 100;
    this._easing = easing || Phaser.Easing.Linear.None;
};

// ========== Prototype =========
HideTransitionMovement.prototype = Object.create(BaseTransition);
HideTransitionMovement.prototype.constructor = HideTransitionMovement;
module.exports = HideTransitionMovement;


HideTransitionMovement.prototype.start = function(callBack,callBackContext)
{
    'use strict';
    this._callBack = callBack;
    this._callBackContext = callBackContext;

    this._tween = this._game.add.tween(this._panel);
    this._tween.onComplete.add(this._callBack,this._callBackContext);
    this._tween.to({ x : this._toX, y : this._toY}, this._timeInMsc, this._easing);
    this._tween.start();
};


HideTransitionMovement.prototype.destroy = function()
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

