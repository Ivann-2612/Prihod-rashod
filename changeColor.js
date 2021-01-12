//change background color -------------------------------------------------------
const btnChangeColor = document.querySelector('#change-color')
const colors = [' red', ' #373737', ' darkred', ' lime', ' cyan', ' blue', ' yellow', ' purple', ' orangered', ' lightgreen', ' pink', ' azure', 'navajowhite', 'gold', 'lightgreen', 'lightgoldenrodyellow', 'indianred', 'darkred', 'beige', 'aquamarine', 'cadetblue', 'darkmagenta', 'black', '#141414']

export function getRandomColor() {
    let random = Math.floor(Math.random() * colors.length)
    return random
}
//console.log(getRandomColor());
const backGround = btnChangeColor.addEventListener('click', () => {
    let randomNumber = getRandomColor()
    document.body.style.height = '100vh'
    document.body.style.backgroundColor = colors[randomNumber]
    document.querySelector('#change-color').style.backgroundColor = colors[randomNumber]
    // document.querySelector('h1').style.color = colors[randomNumber]

})
export default backGround
