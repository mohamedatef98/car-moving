var MAX_GAME_WIDTH = 1000;
var MAX_GAME_HEIGHT = 750;
var CONTROLS_SPACE = 150;

function getGameWidth()
{
    var width;
    if ((document.documentElement.clientWidth - 20) < MAX_GAME_WIDTH)
    {
        width = document.documentElement.clientWidth - 20;
    }
    else
    {
        width = MAX_GAME_WIDTH;
    }
    return width;
}

function getGameHeight()
{
    var height;
    if ((document.documentElement.clientHeight - CONTROLS_SPACE) < MAX_GAME_HEIGHT)
    {
        height = document.documentElement.clientHeight - CONTROLS_SPACE;
    }
    else
    {
        height = MAX_GAME_HEIGHT;
    }
    return height;
}

function Game()
{

    this._htmlEl = document.getElementById('game')
    this._width = getGameWidth();
    this._height = getGameHeight();

    this._htmlEl.style.width = this._width + 'px'
    this._htmlEl.style.height = this._height + 'px'
}

Game.prototype.getMaxRight = function()
{
    return this._width;
}

Game.prototype.getMaxTop = function()
{
    return this._height;
}

var game = new Game()