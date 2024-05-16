import '../css/style.css'
import imgGame from '../img/goblin.png'
const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");
let number = 0; 

img.src = imgGame;
fields[number].append(img);


  function demo() { 
    function getRandom(max) {
    let randomA = Math.floor(Math.random() * max);
    while (randomA === number) {
      randomA = Math.floor(Math.random() * max);
          } 
          number = randomA; 
          return number; 
        } 
        getRandom(16);
        fields[number].append(img);
    }
    
    let interval = setInterval(demo, 1000);












