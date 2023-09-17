function handleKeyPress(e)
{
    switch(e.key)
    {
        case "ArrowLeft":
            theFinestItalianSportsCar.goLeft()
            break;
        case "ArrowRight":
            theFinestItalianSportsCar.goRight()
            break;
        case "ArrowDown":
            theFinestItalianSportsCar.goDown()
            break;
        case "ArrowUp":
            theFinestItalianSportsCar.goUp()
            break;
    }

    e.preventDefault()
}

function handleControlClick(e)
{
    switch(e.srcElement.id)
    {
        case "up":
            theFinestItalianSportsCar.goUp()
            break;
        case "left":
            theFinestItalianSportsCar.goLeft()
            break;
        case "right":
            theFinestItalianSportsCar.goRight()
            break;
        case "down":
            theFinestItalianSportsCar.goDown()
            break;
        default:
            break;
    }
    e.preventDefault()
}

window.addEventListener('keydown', handleKeyPress)
var controlsEl = document.getElementById('controls')
controlsEl.addEventListener('click', handleControlClick)