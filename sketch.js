// let symmetry = 6;

let xoff = 0;
let slider, symSlider, colorSlider;
let label1, label2, label3;
let clearButton, saveButton;
function setup() {
  createCanvas(windowWidth / 1.5, windowHeight / 1.2);
  angleMode(DEGREES);
  background(0);
  slider = createSlider(1, 32, 4, 0.1);
  symSlider = createSlider(2, 20, 6, 2);
  colorSlider = createSlider(1, 3, 1, 1);
  label1 = createElement("h4", "LineWidth");
  label1.style("color", "#8d99ae");
  label1.position(5, height + 7);
  label2 = createElement("h4", "Symmetry");
  label2.style("color", "#8d99ae");
  label2.position(140, height + 7);
  label3 = createElement("h4", "colorMode");
  label3.style("color", "#8d99ae");
  label3.position(265, height + 7);
  clearButton = createButton("Clear");
  clearButton.mousePressed(clearCanvas);
  clearButton.position(5, height + 50);
  saveButton = createButton("Save");
  saveButton.mousePressed(saveImage);
  saveButton.position(60, height + 50);
  colorMode(HSB, 255, 255, 255, 100);
}

function clearCanvas() {
  clear();
  background(0);
}

function saveImage() {
  save("design.png");
}

function draw() {
  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      let cv = colorSlider.value();
      let hu = map(sin(xoff), 1, -1, 0, 255);
      xoff += 1;
      if (cv == 1) {
        stroke(hu, 255);
      } else if (cv == 2) {
        stroke(hu, 255, 255, 100);
      } else {
        if (random(1) < 0.5) {
          stroke(hu, 255);
        } else {
          stroke(hu, 255, 255, 100);
        }
      }

      symmetry = symSlider.value();
      for (var i = 0; i < symmetry; i++) {
        let angle = 360 / symmetry;
        rotate(angle);
        // let d = dist(mouseX, mouseY, pmouseX, pmouseY);
        let sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
