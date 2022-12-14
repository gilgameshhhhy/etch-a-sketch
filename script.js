const sliderValue = document.querySelector('#slider-value').value;
const sliderValueText = document.querySelector('#slider-value-text');
const drawingContainer = document.querySelector('#drawing-container');
const chosenColorBtn = document.querySelector('#chosencolor');
const rainbowBtn = document.querySelector('#rainbow');
const grayscaleBtn = document.querySelector('#grayscale');
const eraserBtn = document.querySelector('#eraser')
const resetBtn = document.querySelector('#reset');
let currentButton = '';
let colorValue = document.querySelector('#colorpicker').value;

chosenColorBtn.onclick = () => activeButton("chosencolor")
rainbowBtn.onclick = () => activeButton("rainbow")
grayscaleBtn.onclick = () => activeButton("grayscale")
eraserBtn.onclick = () => activeButton("eraser")
resetBtn.onclick = () => deleteSketch();

function makeGrid(sliderValue) {
  sliderValueText.textContent = sliderValue + " x " + sliderValue;
  clearGrid();
  drawingContainer.style.setProperty('--grid-rows', sliderValue);
  drawingContainer.style.setProperty('--grid-cols', sliderValue);
  for (let n = 0; n < (sliderValue ** 2); n++) {
    let box = document.createElement("div");
    box.addEventListener('mouseover', colorGrid);
    box.addEventListener('mousedown', colorGrid);
    drawingContainer.appendChild(box).className = "box"
  }
}

function clearGrid() {
  drawingContainer.innerHTML = ''
}

function activeButton(buttonPressed) {
  chosenColorBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  grayscaleBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  if (buttonPressed == "chosencolor") {
    chosenColorBtn.classList.add('active');
    currentButton = "chosencolor"
  } else if (buttonPressed == "rainbow") {
    rainbowBtn.classList.add('active');
    currentButton = "rainbow"
  } else if (buttonPressed == "grayscale") {
    grayscaleBtn.classList.add('active'); 
    currentButton = "grayscale"
  } else if (buttonPressed == "eraser") {
    eraserBtn.classList.add('active');
    currentButton = "eraser"
  }
}


function colorGrid(e) {
  if (currentButton == "chosencolor") {
    e.target.style.backgroundColor = colorValue
  } else if (currentButton == "rainbow") {
    const rValue = Math.floor(Math.random()*255);
    const gValue = Math.floor(Math.random()*255);
    const bValue = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')'
  } else if (currentButton == "grayscale") {
    e.target.style.backgroundColor = "lightgray";
  } else {
    e.target.style.backgroundColor = "white";
  }
}

function updateColor(colorVal) {
  colorValue = colorVal;
  activeButton("chosencolor");
}

function deleteSketch() {
  clearGrid();
  makeGrid(sliderValue);
}

window.onload = () => {
  makeGrid(16);
}