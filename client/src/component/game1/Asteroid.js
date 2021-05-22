/* eslint-disable no-undef */
function Asteroid(x, y, text, color) {
    this.position = createVector(x, y);
    this.color = color;
    this.text = text;
    this.size = text.length * 15;
    this.completedText = "";
    this.intact = true;
}


Asteroid.prototype.update = function () {
    this.position.y += map(score, 0, 1000, 1, 15);
    if (this.position.y > height) {
        endGame();
    }
};


Asteroid.prototype.erode = function (keyCode) {
    var inputChar = String.fromCharCode(keyCode).toLowerCase();
    var length = this.completedText.length + 1;

    if (this.text.substring(0, length) === this.completedText + inputChar)
        this.completedText += inputChar;

    this.intact = (this.completedText !== this.text);
};


Asteroid.prototype.draw = function () {
    fill(this.color);
    stroke(0);
    strokeWeight(3);
    ellipse(this.position.x, this.position.y, this.size);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(this.text, this.position.x, this.position.y);
};


function findAsteroid(code, field) {
    var char = String.fromCharCode(code).toLowerCase();

    for (var i = 0; i < field.length; i++) {
        if (field[i].text.startsWith(char)) {
            return field[i];
        }
    }
    return null;
}