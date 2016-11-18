/**
 * Created by JIocb on 2/3/2016.
 */

var ShowTransition = require('./transition/show/ShowTransitionMovement');
var HideTransition = require('./transition/hide/HideTransitionMovement');

var Panel = function (game,guiBuilder)
{
    'use strict';
    Phaser.Group.call(this, game, null);
    this._game = game;
    this._guiBuilder = guiBuilder;
    this.signal = new Phaser.Signal();

};

// ========== Prototype =========
Panel.prototype = Object.create(Phaser.Group.prototype);
Panel.prototype.constructor = Panel;
module.exports = Panel;


Panel.prototype.build = function() {
    'use strict';
};

Panel.prototype.onClosed = function() {
    'use strict';

    this.signal.dispatch(this,'pressClose');
};

Panel.prototype.reset = function() {
    'use strict';

    this._data = null;

    if (this._showTransition)
    {
        this._showTransition.destroy();
        this._showTransition = null;
    }

    if(this._hideTransition)
    {
        this._hideTransition.destroy();
        this._hideTransition = null;
    }
};

Panel.prototype.initialize = function(aspectRatio,data) {
    'use strict';
    this._data = data;
    this._aspectRatio = aspectRatio || 'landscape';
    this.build();
};

Panel.prototype.resize = function(aspectRatio) {
    'use strict';

    if(this._aspectRatio !== aspectRatio)
    {
        this._aspectRatio = aspectRatio;
        this.changeAspectRatio();
    }
};

Panel.prototype.changeAspectRatio = function() {
    'use strict';
    //this.reset();
    //this.build();
};

Panel.prototype.createShowTransition = function() {
    'use strict';
    return new ShowTransition(this._game, this, 0, -3000, 0, 0, 250, Phaser.Easing.Linear.None);
};

Panel.prototype.createHideTransition = function() {
    'use strict';
    return new HideTransition(this._game, this, this.x, this.y - 3000, 250, Phaser.Easing.Linear.None);
};

Panel.prototype.open = function() {
    'use strict';
    this.visible = true;
    this._showTransition = this.createShowTransition();
    this._showTransition.start(this.onShowed,this);
};

Panel.prototype.onShowed = function() {
    'use strict';

    this._showTransition.destroy();
    this._showTransition = null;
};


Panel.prototype.close = function() {
    'use strict';
    this._hideTransition = this.createHideTransition();
    this._hideTransition.start(this.onHided,this);
};

Panel.prototype.onHided = function() {
    'use strict';
    this.visible = false;
    this._hideTransition.destroy();
    this._hideTransition = null;
    this.signal.dispatch(this,'hided');
};


Panel.prototype.destroy = function() {
    'use strict';

    this.reset();
    this._guiBuilder = null;
    this._game = null;
    this.signal.removeAll();
    this.signal = null;
    this._name = null;
};
