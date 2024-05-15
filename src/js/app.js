const boardSize = 4;

/** Генерируем таблицу */
const field = document.createElement("div");
field.className = "field";

for (let i = 0; i < boardSize * boardSize; i += 1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  field.appendChild(cell);
}
document.body.appendChild(field);

/** Получаем список всех ячеек таблицы */
const cells = Array.from(document.querySelectorAll(".cell"));

/** Функция удаления и добавления изображения в ячейку при помощи CSS-класса */
function goblinImg(index, number) {
  if (index !== -1) {
    cells[index].classList.remove("goblin");
  }

  const goblinImgCell = cells[number];
  goblinImgCell.classList.add("goblin");
}

/** Запускаем игру */
setInterval(() => {
  /** Находим в выбранном массиве ячеек - индекс ячейки с изображением в ней */
  const index = cells.findIndex((item) => item.className.includes("goblin"));

  /** Генерируем случайное число */
  let number = Math.floor(Math.random() * cells.length);

  /** Проверяем, равно ли случайное число индексу ячейки */
  if (number === index) {
    number = Math.floor(Math.random() * cells.length);
  } else {
    goblinImg(index, number);
  }
}, 1000);
