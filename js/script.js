class Shape {
  constructor(color = "#fff", initX = 10, initY = 15) {
    this.color = color;
    this.initX = initX;
    this.initY = initY;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getCoords() {
    return (`(x: ${this.initX}, y: ${this.initY})`);
  }

  moveTo(initX, initY) {
    this.initX = initX;
    this.initY = initY;
  }
}

const figure = new Shape("#000", 15, 85);

console.log(figure)

console.log(figure.getCoords())

class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super (color, initX, initY);
    this.initWidth = initWidth;
    this.initHeight = initHeight;
  }

  setWidth(newWidth) {
    this.initWidth = newWidth;
  }

   setHeight(newHeight) {
     this.initHeight = newHeight;
   }

  getDims() {
    return (`width: ${this.initWidth}
    height: ${this.initHeight}`);
  }

  draw() {
    console.log(`Drawing a Rectangle at:
    ${this.getCoords()}
    With dimentions:
    ${this.getDims()}
    Filled with color: ${this.getColor()}`)
  }
}

const rectangle = new Rectangle('green', 10, 10, 100, 100);

console.log(rectangle);

rectangle.draw();

rectangle.setColor('#009688');
rectangle.setWidth(200);
rectangle.draw();

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super (color, initX, initY);
    this.initRadius = initRadius;
  }

  getRadius() {
    return (`radius: ${this.initRadius}`);
  }

  setRadius(val) {
    this.initRadius = val;
  }

  draw() {
    console.log(`Drawing a Circle at:
${this.getCoords()}
With dimentions:
${this.getRadius()}
Filled with color: ${this.getColor()}`)
  }
}

const circle = new Circle('#FF5722', 50, 50, 250);

console.log(circle);

circle.draw();
