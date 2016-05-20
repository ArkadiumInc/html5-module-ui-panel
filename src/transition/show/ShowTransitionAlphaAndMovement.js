/**
 * Created by jedi on 28-Feb-16.
 */

var BaseTransition = require('./../BaseTransition');
var ShowTransitionAlphaAndMovement = function (game, panel, fromX, fromY, toX, toY, fromAlpha, toAlpha, timeInMsc, easing)
{
    'use strict';
    BaseTransition.call(this, game,panel);
    this._fromX = fromX;
    this._fromY = fromY;
    this._toX = toX;
    this._toY = toY;
    this._fromAlpha = fromAlpha;
    this._toAlpha = toAlpha;
    this._timeInMsc = timeInMsc || 100;
    this._easing = easing || Phaser.Easing.Linear.None;
};

// ========== Prototype =========
ShowTransitionAlphaAndMovement.prototype = Object.create(BaseTransition);
ShowTransitionAlphaAndMovement.prototype.constructor = ShowTransitionAlphaAndMovement;
module.exports = ShowTransitionAlphaAndMovement;


ShowTransitionAlphaAndMovement.prototype.start = function(callBack, callBackContext) {
    'use strict';
    this._callBack = callBack;
    this._callBackContext = callBackContext;

    this._tween = this._game.add.tween(this._panel);
    this._tween.onComplete.add(this._callBack, this._callBackContext);
    this._panel.x = this._fromX;
    this._panel.y = this._fromY;
    this._panel.alpha = this._fromAlpha;
    this._tween.to({ x : this._toX, y : this._toY, alpha : this._toAlpha}, this._timeInMsc, this._easing);
    this._tween.start();

};


ShowTransitionAlphaAndMovement.prototype.destroy = function()
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

