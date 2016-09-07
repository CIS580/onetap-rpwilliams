(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
"use strict;";


Object.defineProperty(exports, "__esModule", {
  value: true
});



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {

  /**
   * @constructor Game
   * Creates a new game object
   * @param {canvasDOMElement} screen canvas object to draw into
   * @param {function} updateFunction function to update the game
   * @param {function} renderFunction function to render the game
   */
  function Game(screen, updateFunction, renderFunction) {
    _classCallCheck(this, Game);

    this.update = updateFunction;
    this.render = renderFunction;

    // Set up buffers
    this.frontBuffer = screen;
    this.frontCtx = screen.getContext('2d');
    this.backBuffer = document.createElement('canvas');
    this.backBuffer.width = screen.width;
    this.backBuffer.height = screen.height;
    this.backCtx = this.backBuffer.getContext('2d');

    // Start the game loop
    this.oldTime = performance.now();
    this.paused = false;
    window.requestAnimationFrame(this.loop);
  }

  /**
   * @function pause
   * Pause or unpause the game
   * @param {bool} pause true to pause, false to start
   */


  _createClass(Game, [{
    key: 'pause',
    value: function pause(flag) {
      this.paused = flag == true;
    }

    /**
     * @function loop
     * The main game loop.
     * @param{time} the current time as a DOMHighResTimeStamp
     */

  }, {
    key: 'loop',
    value: function loop(newTime) {
      var elapsedTime = newTime - this.oldTime;
      this.oldTime = newTime;

      if (!this.paused) this.update(elapsedTime);
      this.render(elapsedTime, this.frontCtx);

      // Flip the back buffer
      frontCtx.drawImage(backBuffer, 0, 0);

      // Run the next loop
      window.requestAnimationFrame(this.loop);
    }
  }]);

  return Game;
}();

},{}],2:[function(require,module,exports){
'use strict';
"use strict;";
//const Game = require('./game.js');



/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {elapsedTime} A DOMHighResTimeStamp indicting
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {}

// TODO: Update the game objects


/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {elapsedTime} A DOMHighResTimeStamp indicting
  * the number of milliseconds passed since the last frame.
  */
function render(elapsedTime, ctx) {

  // TODO: Draw the game objects using the supplied context
  if(background) ctx.drawImage(background, 0, 0);

}

},{"./game":1}]},{},[2]);
