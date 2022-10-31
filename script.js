const sliderValue = document.querySelector('#slider-value').value;
const sliderValueText = document.querySelector('#slider-value-text');
const drawingContainer = document.querySelector('#drawing-container');


function updateValue(val) {
  sliderValueText.textContent = val + " x " + val;
}

function makeGrid(sliderValue) {
  clearGrid();
  drawingContainer.style.setProperty('--grid-rows', sliderValue);
  drawingContainer.style.setProperty('--grid-cols', sliderValue);
  for (let n = 0; n < (sliderValue ** 2); n++) {
    let box = document.createElement("div");
    drawingContainer.appendChild(box).className = "box"
  }
}

function clearGrid() {
  drawingContainer.innerHTML = ''
}