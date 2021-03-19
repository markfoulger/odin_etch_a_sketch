const root = document.documentElement;
const sketchContainer = document.querySelector('#sketch-container');
const clearButton = document.querySelector('#clear-button');
const gridSizeSlider = document.querySelector('#sketch-grid-slider');
const gridSizeLabel = document.querySelector('output[for="sketch-grid-slider"]');


function changeGridSize() {
    gridSizeLabel.textContent = gridSizeSlider.value
}

function generateDivGrid() {
    const gridSize = +gridSizeSlider.value;
    const numOfDivs =  gridSize * gridSize;
    sketchContainer.innerHTML = '<div class="sketch-box"></div>'.repeat(numOfDivs);
    root.style.setProperty('--gridSize', gridSize);
    setupGridEvents();
}

function setupGridEvents(){
    const pixels = sketchContainer.querySelectorAll('.sketch-box');
    pixels.forEach(pixel => pixel.addEventListener('mouseenter', colourPixel));
}

function colourPixel() {
    this.style.backgroundColor = 'black';
}
                       
clearButton.addEventListener('click', generateDivGrid);
gridSizeSlider.addEventListener('input', changeGridSize);
gridSizeSlider.addEventListener('change', generateDivGrid)