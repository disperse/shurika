/*
 * Shuriken
 * ====
 *
 */

'use strict';

function StatusBar(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'status_bar');
  console.log('StatusBar', this);
  this.fixedToCamera = true;
}

StatusBar.prototype = Object.create(Phaser.Sprite.prototype);
module.exports = StatusBar.prototype.constructor = StatusBar;
