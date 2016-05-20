/**
 * Created by jedi on 24-Feb-16.
 */

var BaseTransition = require('./../BaseTransition');
var ShowTransitionAlpha = function (game, panel, fromAlpha, toAlpha, timeInMsc, easing)
{
    'use strict';
    BaseTransition.call(this, game,panel);
    this._fromAlpha = fromAlpha;
    this._toAlpha = toAlpha;
    this._timeInMsc = timeInMsc || 100;
    this._easing = easing || Phaser.Easing.Linear.None;
};

// ========== Prototype =========
ShowTransitionAlpha.prototype = Object.create(BaseTransition);
ShowTransitionAlpha.prototype.constructor = ShowTransitionAlpha;
module.exports = ShowTransitionAlpha;


ShowTransitionAlpha.prototype.start = function(callBack, callBackContext) {
    'use strict';
    this._callBack = callBack;
    this._callBackContext = callBackContext;

    this._tween = this._game.add.tween(this._panel);
    this._tween.onComplete.add(this._callBack, this._callBackContext);
    this._panel.alpha = this._fromAlpha;
    this._tween.to({ alpha : this._toAlpha}, this._timeInMsc, this._easing);
    this._tween.start();
};


ShowTransitionAlpha.prototype.destroy = function()
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

