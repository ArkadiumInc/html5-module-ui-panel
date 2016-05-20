/**
 * Created by dor on 2/2/2015.
 */
/**
 * Created by Stas on 11/17/2014.
 */

// ========================= Construction =========================
var GameState = function(name, allowedTransitions) {
    "use strict";
    this.name = name;
    this.allowedTransitions = allowedTransitions;
    this.OnEnterEvent = new Phaser.Signal();
    this.OnUpdateEvent = new Phaser.Signal();
    this.onExitEvent = new Phaser.Signal();
};
module.exports = GameState;

// ========================= Prototype =========================
GameState.prototype = {
    toString:function(){
        "use strict";
        return "GameState: " + this._name;
    }
};

// ========================= Methods =========================
GameState.getState = function() {
    "use strict";
    return GameState.Current;
};
GameState.setState = function(state){
    "use strict";
    if (GameState.Current !== undefined) {
        // Prevent switching from a state to the same state
        if (GameState.Current.name === state.name) {
            console.log("GameState.setState()", "Warning: Cannot switch to the same state");
            return;
        }
        // Prevent switching if new state is not listed in the allowed transitions
        else if (GameState.Current.allowedTransitions.indexOf(state.name) < 0) {
            console.log("GameState.setState()", "Warning: Transition from " + GameState.Current.name + " to " + state.name + " is not allowed.");
            return;
        }
        // Transition is allowed, so exit the current state
        GameState.Current.onExitEvent.dispatch();
    }
    GameState.Current = state;
    GameState.Current.OnEnterEvent.dispatch();
};
GameState.updateCurrentState = function(game){
    "use strict";
    if (GameState.Current !== null) {
        GameState.Current.OnUpdateEvent.dispatch(game);
    }
};

// ========================= State Names =========================
GameState.StateNames = {
    InProgress: "InProgress",
    Paused: "Paused",
    AutoSolving: "AutoSolving",
    GameComplete: "GameComplete"
};
Object.freeze(GameState.StateNames);

// ========================= States =========================
GameState.InProgress = new GameState(GameState.StateNames.InProgress, [GameState.StateNames.Paused, GameState.StateNames.GameComplete]);
GameState.Paused = new GameState(GameState.StateNames.Paused, [GameState.StateNames.InProgress, GameState.StateNames.AutoSolving]);
GameState.AutoSolving = new GameState(GameState.StateNames.AutoSolving, [GameState.StateNames.GameComplete]);
GameState.GameComplete = new GameState(GameState.StateNames.GameComplete, []);