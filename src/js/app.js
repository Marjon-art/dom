import '../css/style.css'
import imgGame from '../img/goblin.png'
const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");


img.src = imgGame;
fields[0].append(img);
const number = randomA;

  function demo() { 
    function getRandom(max) {
    let randomA = Math.floor(Math.random() * max);
    while (randomA === number) {
      randomA = Math.floor(Math.random() * max);
          } 
          number = randomA; 
          return number; 
        }
    }
    
    //const interval = setInterval(() => demo(), 1000);















// добавь картинку в ячейку поля, кодом 
//метод Math.random отработал, вернул, например, 10. 
//Подставь вместо Math.random() в выражение - Math.random().fields[6].append(img); - эту 10. 
//Прочитай что получилось, как это будет работать 