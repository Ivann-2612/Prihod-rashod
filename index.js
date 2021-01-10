const cifraPrihod = document.querySelector('.cifra-prihod')
const cifraRashod = document.querySelector('.cifra-rashod')
const procenatRashod = document.querySelector('#procenat-rashod')
const inputOpis = document.querySelector('#input-opis')
const inputIznos = document.querySelector('#input-iznos')
const select = document.querySelector('#select')
const btn = document.querySelector('#ok-button')
const listaPrihoda = document.querySelector('#listaPrihoda')
const listaRashoda = document.querySelector('#listaRashoda')

let arrPrihod = []
let items1 = [0];
let items2 = [0];


function sumArray(total, value) {
    return total + value;
}

btn.addEventListener('click', () =>{


   if(select.value == 'prihod'){
   cifraPrihod.textContent = `+ ${inputIznos.value}`

   const mainDiv = document.createElement('div')
            mainDiv.className = 'mainDiv1'
            const div1 = document.createElement('div')
            div1.className = 'div1'
            const div2 = document.createElement('div')
            div2.className = 'div2'
            const div3 = document.createElement('div')
            div3.className = 'div3'
            const obrisi = document.createElement('button')
            obrisi.className = 'obrisi1'
            obrisi.innerHTML = 'x'
            mainDiv.append(div1,div2,div3,obrisi)
            mainDiv.style.border = '2px solid black'
            mainDiv.style.padding = '5px'
            mainDiv.style.marginTop = '4px'
                
            listaPrihoda.appendChild(mainDiv)

            div1.innerHTML = `${inputOpis.value}`
            div2.innerHTML = `+`
            div3.innerHTML = `${inputIznos.value}`
            items1.push(inputIznos.value * 1);
            
        //    for (let i = 0; i < listaPrihoda.length; i++) {
        //        const sum = 0;

        //      return sum += listaPrihoda[i]
            
        //    }
        //    console.log(sum);   
        const sum1 = items1.reduce(sumArray);
        const sum2 = items2.reduce(sumArray);
        const sum3 = sum1 - sum2
        document.getElementById('dostupanNovac').innerHTML = `${sum3}`

        console.log(sum1);
    }

   else if(select.value == 'rashod'){
   cifraRashod.textContent = `- ${inputIznos.value}`
   
   const mainDiv2 = document.createElement('div')
            mainDiv2.className = 'mainDiv2'
            //    const sum1 = items1.reduce(sumArray);
            const div21 = document.createElement('div')
            div21.className = 'div21'
            const div22 = document.createElement('div')
            div22.className = 'div22'
            const div23 = document.createElement('div')
            div23.className = 'div23'
            const obrisi1 = document.createElement('button')
            obrisi1.className = 'obrisi2'
            obrisi1.innerHTML = 'x'
            mainDiv2.append(div21,div22,div23,obrisi1)
            mainDiv2.style.border = '2px solid black'
            mainDiv2.style.padding = '5px'
            mainDiv2.style.marginTop = '4px'
            listaRashoda.appendChild(mainDiv2)

            div21.innerHTML = `${inputOpis.value}`
            div22.innerHTML = `-`
            div23.innerHTML = `${inputIznos.value} `

            items2.push(inputIznos.value * 1);
            const sum1 = items1.reduce(sumArray);
            const sum2 = items2.reduce(sumArray);
            const sum3 = sum1 - sum2
            document.getElementById('dostupanNovac').innerHTML = `${sum3}`
}
            
           
            // dostupanNovac.textContent = cifraPrihod - cifraRashod
})




const btnChangeColor = document.querySelector('#change-color')
const colors = [' red',' #373737',' darkred',' lime',' cyan',' blue',' yellow',' purple',' orangered',' lightgreen',' pink',' azure','navajowhite','gold','lightgreen','lightgoldenrodyellow','indianred','darkred','beige','aquamarine','cadetblue','darkmagenta','black','#141414']

function getRandomColor() {
    let random  = Math.floor(Math.random() * colors.length)
    return random
}
//console.log(getRandomColor());
btnChangeColor.addEventListener('click', () => {
    let randomNumber = getRandomColor()
    document.body.style.height = '100vh'
    document.body.style.backgroundColor = colors[randomNumber]
})