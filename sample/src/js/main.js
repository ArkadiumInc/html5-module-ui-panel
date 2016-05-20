'use strict';

var game = new Phaser.Game(1600, 1200, Phaser.AUTO, 'game-template'); // jshint ignore:line


window.Utils = require('./utils/utils');
window.playerState = {
    currentLevel: 'Game'
};

game.state.add('Boot', require('./states/boot'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
//game.state.add('Game', require('./states/game'));

game.state.start('Boot');