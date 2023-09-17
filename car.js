var INCREMENT = 10;
var DIRECTION_RIGHT = "DIRECTION_RIGHT"
var DIRECTION_LEFT = "DIRECTION_LEFT"
var DIRECTION_UP = "DIRECTION_UP"
var DIRECTION_DOWN = "DIRECTION_DOWN"

function Car(game)
{
    var imageAspectRatio = 1.95;
    this._width = 75;
    this._height = 75 / imageAspectRatio;
    this._containerEl = document.getElementById('car')
    this._imageEl = this._containerEl.querySelector('img')
    this._right = 0
    this._top = 0
    this._maxRight = game.getMaxRight() - this._width
    this._maxTop = game.getMaxTop() - (this._width + this._height) / 2;
    this._direction = DIRECTION_LEFT

    this._containerEl.style.width = this._width + 'px'
    this._containerEl.style.height = this._height + 'px'
    this.update()
}

Car.prototype.update = function()
{
    var transform;
    var right = this._right;
    var top = this._top;
    switch(this._direction)
    {
        case DIRECTION_LEFT:
            transform = "rotate(0deg)"
            break;
        case DIRECTION_RIGHT:
            transform = "rotate(180deg)"
            break;
        case DIRECTION_UP:
            transform = "rotate(90deg)"
            break;
        case DIRECTION_DOWN:
            transform = "rotate(-90deg)"
            break;
        default:
            break;
    }

    this._containerEl.style.right = right+"px"
    this._containerEl.style.top = top+"px"
    this._imageEl.style.transform = transform
}

Car.prototype._directed = function(direction)
{
    var alreadyDirected = direction == this._direction;
    this._direction = direction;
    return alreadyDirected;
}

Car.prototype.goLeft = function()
{
    if (this._directed(DIRECTION_LEFT))
    {
        this._right += INCREMENT;
        if (this._right >= this._maxRight)
        {
            this._right = this._maxRight
        }
    }
    this.update()
}

Car.prototype.goRight = function()
{
    if (this._directed(DIRECTION_RIGHT))
    {
        this._right -= INCREMENT;
        if (this._right <= 0)
        {
            this._right = 0
        }
    }
    this.update()
}

Car.prototype.goDown = function()
{
    if (this._directed(DIRECTION_DOWN))
    {
        this._top += INCREMENT;
        if (this._top >= this._maxTop)
        {
            this._top = this._maxTop
        }
    }
    this.update()
}

Car.prototype.goUp = function()
{
    if (this._directed(DIRECTION_UP))
    {
        this._top -= INCREMENT;
        if (this._top <= 0)
        {
            this._top = 0
        }
    }
    this.update()
}

var theFinestItalianSportsCar = new Car(game)