let boids_left = [], boids_right = [];
let game;

function setup() {
  createCanvas(1500, 900);
  game = new Game();

  // Add an initial set of boids into the system
  for (var i = 0; i < 5; i++) {
    boids_left[i] = new Boid(random(width), random(height), -1);
    boids_right[i] = new Boid(random(width), random(height), 1);
  }
}

function draw() {
  background(51);
  game.run();
  // Run all the boids
  for (var i = 0; i < boids_left.length; i++) {
    boids_left[i].run(boids_left);
  }
  for (var i = 0; i < boids_right.length; i++) {
    boids_right[i].run(boids_right);
  }
  if (mouseIsPressed) {
    if (random() < 0.5) {
      boids_right.push(new Boid(mouseX, mouseY, 1));
    } else {
      boids_left.push(new Boid(mouseX, mouseY, -1));
    }
  }
}
