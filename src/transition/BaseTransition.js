/**
 * Created by JIocb on 2/4/2016.
 */
var BaseTransition = function (game,panel)
{
    "use strict";
    this._game = game;
    this._panel = panel;

};

// ========== Prototype =========
BaseTransition.prototype = Object.create(Object.prototype);
BaseTransition.prototype.constructor = BaseTransition;
module.exports = BaseTransition;

BaseTransition.prototype.start = function(callBack,callBackContext)
{
    this._callBack = callBack;
    this._callBackContext = callBackContext;

    if(this._callBack && this._callBackContext)
    {
        this._callBack.call(this._callBackContext);
    }
};


BaseTransition.prototype.destroy = function()
{
    this._callBack = null;
    this._callBackContext = null;

};