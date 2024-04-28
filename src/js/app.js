import '../css/style.css'
import imgGame from '../img/goblin.png'
const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");

img.src = imgGame;
fields[0].append(img);




// добавь картинку в ячейку поля, кодом 
//метод Math.random отработал, вернул, например, 10. 
//Подставь вместо Math.random() в выражение - Math.random().fields[6].append(img); - эту 10. 
//Прочитай что получилось, как это будет работать 