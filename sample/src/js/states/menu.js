var PanelManagerModule = require("arkadium-panelmanager-test");
var SamplePanel = require("../panel/SamplePanel");
var GameSettings = require("../GameSettings");
// ========================= Construction =========================
var Menu = function () {
  "use strict";
  this.puzzleInfoList = []; // List of info for all the puzzles that we attempted to load
};


// ========================= Prototype =========================
Menu.prototype = {
  preload: function() {
    "use strict";


  },

  create: function () {
    "use strict";
    document.getElementById('game_preloader').style.visibility = "hidden";

    // ========================= Container =========================

    this.container = new Phaser.Group(this.game,null);
    this.game.add.existing(this.container);

    //in case if you have guibuilder module you can pass it here and use in your panels
    var guiBuilder = null;
    this._panelManager = new PanelManagerModule.PanelManager(this.game,guiBuilder,"landscape");
    this._panelManager.setRoot(this.container)
    this._panelManager.registerPanel("sample_panel",SamplePanel)

    this.label = new Phaser.BitmapText(this.game, 0, 0, GameSettings.mediumFont, "100", 56);
    this.label.text = "CLICK TO OPEN PANEL";
    this.label.tint = 0xb36d43;
    this.game.add.existing(this.label);
    this.opened = false;
    this.game.input.mouse.mouseDownCallback = this.onInputDownHandler.bind(this);


    //this._panelManager.open("sample_panel",{customData:"Bla bla bla"});
    // Add event listeners
    this.onResize();
  },

  onInputDownHandler:function (sprite, pointer) {
  "use strict";
    if(this.opened == true)
    {
      this.label.text = "CLICK TO OPEN PANEL";
      this.opened = false;
      this._panelManager.close("sample_panel");
    }
    else
    {
      this.label.text = "CLICK TO CLOSE PANEL";
      this.opened = true;
      this._panelManager.open("sample_panel", {customData: "Bla bla bla"});
    }

  },

  // ========================= Update =========================
  update: function() {
    "use strict";
  },

  onResize: function() {
    "use strict";
    // We need to call this twice...
  },

  // ========================= Button Event =========================

  startGameScene: function() {
    "use strict";
    // Clear this state and switch to new one
    this.destroy();
    this.game.state.clearCurrentState();
    this.game.state.start('Game');
  },

  // ========================= Destruction =========================
  destroy: function() {
    "use strict";
    this.game.scale.onSizeChange.remove(this.onResize, this);
    this.playButton.destroy();
  }
};

// ========================= Exports =========================
module.exports = Menu;