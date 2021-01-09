const dostupanNovac = document.querySelector('#dostupan-novac')
const cifraPrihod = document.querySelector('.cifra-prihod')
const cifraRashod = document.querySelector('.cifra-rashod')
const procenatRashod = document.querySelector('#procenat-rashod')
const inputOpis = document.querySelector('#input-opis')
const inputIznos = document.querySelector('#input-iznos')
const select = document.querySelector('#select')
const btn = document.querySelector('#ok-button')
const display = document.querySelector('#section-three')

let arr = []
//console.log(cifraPrihod);
btn.addEventListener('click', () =>{

   if(select.value == 'prihod'){
    
   cifraPrihod.textContent = `+ ${inputIznos.value}`}
   else if(select.value == 'rashod'){
   cifraRashod.textContent = `- ${inputIznos.value}`}
    
   function createElement(html) {
       html = `
       <div id="listaPrihoda">
         <p class="naslov">Prihodi</p>
       </div>
   `
   }
   display.textContent = createElement()  
})
