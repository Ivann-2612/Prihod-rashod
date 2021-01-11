const cifraPrihod = document.querySelector('.cifra-prihod')
const cifraRashod = document.querySelector('.cifra-rashod')
const procenatRashod = document.querySelector('#procenat-rashod')
const inputOpis = document.querySelector('#input-opis')
const inputIznos = document.querySelector('#input-iznos')
const select = document.querySelector('#select')
const btn = document.querySelector('#ok-button')
const listaPrihoda = document.querySelector('#listaPrihoda')
const listaRashoda = document.querySelector('#listaRashoda')

//let arrPrihod = []
let items1 = [];
let items2 = [];

btn.addEventListener('click', () => {

    if (select.value == 'prihod') {
        cifraPrihod.textContent = `+ ${inputIznos.value}`

        const mainDiv = document.createElement('div')
        mainDiv.className = 'mainDiv1'

        mainDiv.innerHTML = `
                <div class="div1">${inputOpis.value}</div>
                <div class="div2">`+ `</div>
                <div class="div3">${inputIznos.value}</div>
            `
        const obrisi = document.createElement('button')
        obrisi.className = 'obrisi1'
        obrisi.innerHTML = 'x'
        mainDiv.append(obrisi)
        mainDiv.style.border = '2px solid black'
        mainDiv.style.padding = '5px'
        mainDiv.style.marginTop = '4px'

        listaPrihoda.appendChild(mainDiv)

        items1.push(inputIznos.value * 1);

        document.querySelector('.cifra-prihod').innerHTML = items1.reduce((a, b) => a + b, 0)
        
    }

    else if (select.value == 'rashod') {
        cifraRashod.textContent = `- ${inputIznos.value}`

        const mainDiv2 = document.createElement('div')
        mainDiv2.className = 'mainDiv2'

        mainDiv2.innerHTML = `
                <div class="div21">${inputOpis.value}</div>
                <div class="div22">`+ `</div>
                <div class="div23">${inputIznos.value}</div>
            `
        const obrisi1 = document.createElement('button')
        obrisi1.className = 'obrisi2'
        obrisi1.innerHTML = 'x'
        mainDiv2.append(obrisi1)
        mainDiv2.style.border = '2px solid black'
        mainDiv2.style.padding = '5px'
        mainDiv2.style.marginTop = '4px'
        listaRashoda.appendChild(mainDiv2)

        items2.push(inputIznos.value * 1);
        document.querySelector('.cifra-rashod').innerHTML = items2.reduce((a, b) => a + b, 0)


    }
    let sum = document.querySelector('#dostupan-novac')
        sum.innerHTML = items1 - items2
})




//change background color -------------------------------------------------------
const btnChangeColor = document.querySelector('#change-color')
const colors = [' red', ' #373737', ' darkred', ' lime', ' cyan', ' blue', ' yellow', ' purple', ' orangered', ' lightgreen', ' pink', ' azure', 'navajowhite', 'gold', 'lightgreen', 'lightgoldenrodyellow', 'indianred', 'darkred', 'beige', 'aquamarine', 'cadetblue', 'darkmagenta', 'black', '#141414']

function getRandomColor() {
    let random = Math.floor(Math.random() * colors.length)
    return random
}
//console.log(getRandomColor());
btnChangeColor.addEventListener('click', () => {
    let randomNumber = getRandomColor()
    document.body.style.height = '100vh'
    document.body.style.backgroundColor = colors[randomNumber]
    document.querySelector('#change-color').style.backgroundColor = colors[randomNumber]
    // document.querySelector('h1').style.color = colors[randomNumber]

})