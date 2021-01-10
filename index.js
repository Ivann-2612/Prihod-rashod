const dostupanNovac = document.querySelector('#dostupan-novac')
const cifraPrihod = document.querySelector('.cifra-prihod')
const cifraRashod = document.querySelector('.cifra-rashod')
const procenatRashod = document.querySelector('#procenat-rashod')
const inputOpis = document.querySelector('#input-opis')
const inputIznos = document.querySelector('#input-iznos')
const select = document.querySelector('#select')
const btn = document.querySelector('#ok-button')
const display = document.querySelector('#section-three')
const listaPrihoda = document.querySelector('#listaPrihoda')
const listaRashoda = document.querySelector('#listaRashoda')

let arrPrihod = []
//console.log(cifraPrihod);
btn.addEventListener('click', () =>{

   if(select.value == 'prihod'){
   cifraPrihod.textContent = `+ ${inputIznos.value}`
   var par = document.createElement('div')
            par.className = 'list1cont'
            var par1 = document.createElement('div')
            par1.className = 'div1'
            var par13 = document.createElement('div')
            par13.className = 'div13'
            var par12 = document.createElement('div')
            par12.className = 'div12'
            var obrisi = document.createElement('button')
            obrisi.className = 'obrisi1'
            obrisi.innerHTML = 'x'
            par.append(par1,par13,par12,obrisi)
            listaPrihoda.appendChild(par)
            par1.innerHTML = `${inputOpis.value}`
            par13.innerHTML = `+`
            par12.innerHTML = `${(inputIznos.value)}\n`
            arrPrihod.push(listaPrihoda); 
}
   else if(select.value == 'rashod'){
   cifraRashod.textContent = `- ${inputIznos.value}`
   
}
    
   
   //dispay.textContent = createElement()  
})
console.log(listaPrihoda);
console.log(arrPrihod);