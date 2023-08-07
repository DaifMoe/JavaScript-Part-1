// Create a circle Object
// Radius Property
// Circle propery = read only value by using a getter

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
