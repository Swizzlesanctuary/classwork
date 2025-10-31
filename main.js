let zoomInButton = document.getElementById('button1');
let zoomOutButton = document.getElementById('button2');
let background = document.getElementById('background');
let hideButton = document.getElementById('hide');
let showButton = document.getElementById('show');
let colorButton = document.getElementById('colorButton');
let textColor = document.getElementById('textColor');

zoomInButton.addEventListener('click', () => {
  background.classList.add('fullscreen');
});

zoomOutButton.addEventListener('click', () => {
  background.classList.remove('fullscreen');
});

showButton.addEventListener('click',()=>{
  background.classList.remove('hide');
})

hideButton.addEventListener('click',()=>{
  background.classList.add('hide');
})


let colors = ['pink', 'green', 'yellow'];
let clickCount = 0;

colorButton.addEventListener('click', () => {
  const currentColor = colors[clickCount % colors.length];
  textColor.style.color = currentColor;
  textColor.textContent = currentColor;
  clickCount++;
});
