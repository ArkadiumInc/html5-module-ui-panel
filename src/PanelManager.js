/**
 * Created by JIocb on 2/3/2016.
 */

var PanelManager = function (game,guiBuilder,aspectRatio)
{
    'use strict';

    this._game = game;
    this._guiBuilder = guiBuilder;
    this._classByKey = {};
    this._currentPanels = {};
    this._aspectRatio = aspectRatio;

};

// ========== Prototype =========
PanelManager.prototype = Object.create(Object.prototype);
PanelManager.prototype.constructor = PanelManager;
module.exports = PanelManager;

PanelManager.prototype.setRoot = function(container) {
    'use strict';
    this._boardContainer = container;

};

PanelManager.prototype.registerPanel = function(panelName, panelClass) {
    'use strict';
    this._classByKey[panelName] = panelClass;

};

PanelManager.prototype.open = function(panelName,data) {
    'use strict';

    var panel = this._currentPanels[panelName];
    if(panel)
    {
        panel.reset();
        this._boardContainer.addChild(panel);
        panel.initialize(this._aspectRatio,data);
        panel.open();
        this._currentPanels[panelName]  = panel;
        return panel;
    }

    var cl = this._classByKey[panelName];
    panel = new cl(this._game,this._guiBuilder);
    this._boardContainer.addChild(panel);
    panel.initialize(this._aspectRatio,data);
    panel.open();
    this._currentPanels[panelName]  = panel;
    return panel;
};

PanelManager.prototype.close = function(panelName) {
    'use strict';

    var panel = this._currentPanels[panelName];

    if(panel)
    {
        panel.close();
    }

    return panel;
};

PanelManager.prototype.resize = function(aspectRatio) {
    'use strict';

    this._aspectRatio = aspectRatio;

    for(var key in this._currentPanels)
    {
        if(this._currentPanels.hasOwnProperty(key)) {
            var panel = this._currentPanels[key];

            if (panel != null && panel.parent) {
                panel.resize(this._aspectRatio);
            }
        }
    }

};

/*
PanelManager.prototype.onPanelEvent = function(panel,eventname) {
    'use strict';
    console.log('onClosePanelEvent',eventname,panel);
    if(eventname == 'pressClose')
    {
        panel.close();
    }
    else if(eventname === 'hided')
    {
        console.log("REMOVED PANEL")
        this._boardContainer.removeChild(panel);
        delete(this._currentPanels[panel.name]);
        panel.reset();
    }
};
*/

PanelManager.prototype.destroy = function() {
    'use strict';

    console.log("Destroy")

    for(var key in this._currentPanels)
    {
        if(this._currentPanels.hasOwnProperty(key)) {
            var panel = this._currentPanels[key];

            if (panel != null && panel.parent) {
                panel.destroy();
                this._boardContainer.removeChild(panel)
            }
        }
    }

    this._aspectRatio = null;
    this._classByKey = null;
    this._currentPanels = null;

    this._boardContainer = null;
    this._game = null;
    this._guiBuilder = null;

};