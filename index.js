import backGround from './changeColor.js'

const cifraPrihod = document.querySelector('.cifra-prihod')
const cifraRashod = document.querySelector('.cifra-rashod')
const procenatRashod = document.querySelector('#procenat-rashod')
const inputOpis = document.querySelector('#input-opis')
const inputIznos = document.querySelector('#input-iznos')
const select = document.querySelector('#select')
const btn = document.querySelector('#ok-button')
const listaPrihoda = document.querySelector('#listaPrihoda')
const listaRashoda = document.querySelector('#listaRashoda')
const dostupanNovac = document.querySelector('#dostupan-novac')
const btnPrikazIstorije = document.querySelector('#prikazi-istoriju')

//let arrPrihod = []
let items1 = [];
let items2 = [];
let istorija = []

istorija.innerHTML = 

btn.addEventListener('click', () => {
    //cifraPrihod.textContent = `+ ${inputIznos.value}`
   
    if (select.value == 'prihod') {
        
        const mainDiv = document.createElement('div')
        mainDiv.className = 'mainDiv1'

        mainDiv.innerHTML = `
                <div class="div1">${inputOpis.value}</div>
                <div class="div2">`+`</div>
                <div class="div3">${inputIznos.value}</div>
            `
        const obrisi = document.createElement('button')
        obrisi.style.opacity = '0'
    
             
       obrisi.addEventListener('mouseenter',() => {
        obrisi.style.opacity = '1'
        obrisi.style.backgroundColor = 'red'
        obrisi.style.color = 'white'
        obrisi.style.padding = '1px 8px'
           obrisi.innerHTML = 'X'
         })
         obrisi.addEventListener('mouseleave',() => {
            obrisi.style.opacity = '0'
             
             })
        obrisi.addEventListener('click',function () {
            obrisi.parentElement.remove()
            cifraPrihod.remove()
            // items1.innerHTML = ''
        })
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
        obrisi1.style.opacity = '0'
        obrisi1.addEventListener('mouseenter',() => {
            obrisi1.style.opacity = '1'
            obrisi1.style.backgroundColor = 'red'
            obrisi1.style.color = 'white'
            obrisi1.style.padding = '1px 8px'
               obrisi1.innerHTML = 'x'
             })
             obrisi1.addEventListener('mouseleave',() => {
                obrisi1.style.opacity = '0'
                 
             })

             obrisi1.addEventListener('click',remove) 
             function remove(){
                obrisi1.parentElement.remove()
                this.cifraPrihod.remove()
                // cifraPrihod.textContent = ''
                // items2.textContent = ''
             }
        mainDiv2.append(obrisi1)
        mainDiv2.style.border = '2px solid black'
        mainDiv2.style.padding = '5px'
        mainDiv2.style.marginTop = '4px'
        listaRashoda.appendChild(mainDiv2)

        items2.push(inputIznos.value * 1);
        

        document.querySelector('.cifra-rashod').innerHTML = items2.reduce((a, b) => a + b,0)
        

    }
    let ukupnaCifra = dostupanNovac 
        ukupnaCifra.innerHTML = `+ ${items1 - items2}`
        
        console.log(typeof ukupnaCifra);
})

// btnPrikazIstorije.addEventListener('click', function prikaziIstor() {
    
//     istorija.push(items1,items2)

//     let displayNone = document.body.style.display = 'none'
    
//     if(displayNone){
//        const divIst = document.createElement('div')
//        divIst.className = 'divIst'
       
//        divIst.innerHTML = `
//             <div>
//                 <li>${items1}</li>
//                 <li>${items2}</li>
//             </div>
//        `
//        document.body.append(divIst)
//     }else{
//         document.body.style.display = 'block'
//     }


//     console.log(istorija);
// })



