const board = document.querySelector('#board');
// const colors = ['#5BBA6F', '#3FA34D', '#2A9134', '#137547', '#054A29'];
// const colors = ['#F5C900ff', '#E1BB0Cff', '#CDAD18ff', '#B9A023ff', '#A5922Fff', '#91843Bff', '#7C7647ff', '#686853ff', '#545A5Fff', '#404D6Aff', '#2C3F76ff', '#183182ff'];
// const colors = ['#CF203Eff', '#C42546ff', '#BA2A4Eff', '#AF2F57ff', '#A5345Fff', '#9A3967ff', '#903F6Fff', '#854477ff', '#7A497Fff', '#704E88ff', '#655390ff', '#5B5898ff', '#505DA0ff'];
const colors = ['#CF203Eff', '#C42546ff', '#BA2A4Eff', '#AF2F57ff', '#A5345Fff', '#9A3967ff', '#903F6Fff', '#854477ff', '#7A497Fff', '#704E88ff', '#655390ff', '#5B5898ff', '#505DA0ff', '#F5C900ff', '#E1BB0Cff', '#CDAD18ff', '#B9A023ff', '#A5922Fff', '#91843Bff', '#7C7647ff', '#686853ff', '#545A5Fff', '#404D6Aff', '#2C3F76ff', '#183182ff'];

const SQUARES_NUMBER = 5000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));
  board.append(square);
}

function setColor(element) {
const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`, `0 0 50px ${color}`;

}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}