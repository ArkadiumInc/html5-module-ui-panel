/**
 * Created by Stas on 1/16/2015.
 */


// ========================= Construction =========================
/**
 * Contains game option, meant to be used as singleton
 * @type {{alphabet: string}}
 */
var GameSettings = {
    // Fonts
    lightFont: "Gotham-Light",
    mediumFont: "Gotham-Medium",

    // Atlases
    gameAtlas: "gameAtlas",
    uiAtlas: "uiAtlas",
    assetScale: 1,

    // Device variables (settings that are affected by specific devices)
    currentDevice: 0,
    animatePopups: true, // play popup tweens if running in WebGL, but not in canvas
    cullListItems: false, // manually cull list items if the device doesn't support masking

    // Game variables
    wereOptionsChanged: false,

    // App variables
    version: "0.01",
    DEBUG: true
};
module.exports = GameSettings;

// ========================= Sizes =========================
GameSettings.Sizes = {
    small: "small",
    medium: "medium",
    large: "large"
};
Object.freeze(GameSettings.Sizes);

GameSettings.AssetScales = {
    small: 0.6,
    medium: 0.8,
    large: 1
};
Object.freeze(GameSettings.AssetScales);

GameSettings.setAssetSizeMultiplier = function (game) {
    "use strict";
    game.scale.setMaximum();
    game.scale.refresh();
    game.scale.boot();
    GameSettings.assetScale = GameSettings.AssetScales.large;

    var minSideLength = Math.min(game.scale.width, game.scale.height);
    if(minSideLength > 900){
        GameSettings.assetScale = GameSettings.AssetScales.large;
    }
    else if(minSideLength>600){
        GameSettings.assetScale = GameSettings.AssetScales.medium;
    }
    else {
        GameSettings.assetScale = GameSettings.AssetScales.small;
    }
    console.log("GameSettings.setAssetSizeMultiplier()", game.width, game.height, GameSettings.assetScale);
};

// ========================= Options =========================
GameSettings.Options = {
    showTimer: true
};

GameSettings.loadOptions = function () {
    "use strict";
    if (typeof(Storage) !== "undefined") {
        var loadedOptions = localStorage.getItem("GameSettings.Options");
        if (loadedOptions != null) {
            GameSettings.Options = JSON.parse(loadedOptions);
        }
    }
};

GameSettings.saveOptions = function () {
    "use strict";
    if (typeof(Storage) !== "undefined") {
        try {
            localStorage.setItem("GameSettings.Options", JSON.stringify(GameSettings.Options));
        }
        catch(error) {
            console.log("GameSettings.saveOptions()", error.message);
        }
    }
};


// ========================= Enums =========================
GameSettings.PopupStates = {
    hidden: 0, // Popup is not shown
    appearing: 1, // Popup is playing a tween-in animation
    visible: 2, // Popup is shown onscreen
    disappearing: 3 // Popup is playing a tween-out animation, returns to Hidden state afterwards
};
Object.freeze(GameSettings.PopupStates);

GameSettings.OptionsItems = {
    Help: 3,
    ExitPuzzle: 5
};
Object.freeze(GameSettings.OptionsItems);

GameSettings.EndGameReason = {
    Completed: "Game Completed",
    Quit: "Quit"
};
Object.freeze(GameSettings.EndGameReason);

GameSettings.InputPriorities = {
    Default: 0,
    Scrim: 1,
    Popups: 2,
    PopupItems: 3,
    Buttons: 4
};
Object.freeze(GameSettings.InputPriorities);

GameSettings.Devices = {
    Desktop: 0,
    Tablet: 1,
    Phone: 2
};
Object.freeze(GameSettings.Devices);
