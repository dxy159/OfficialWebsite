function Paddle(left, top) {
	this.pos = createVector(left, top);
	this.height = 160;
	this.width = 30;
	this.vel = 8;
  this.color = createVector(0,0,0);
}

Paddle.prototype.draw = function() {
  fill(this.color.x, this.color.y, this.color.z);
  rect(this.pos.x, this.pos.y, this.width, this.height);
};

Paddle.prototype.collidePoint = function (vector) {
	return ((this.pos.x < vector.x) && (this.pos.x + this.width > vector.x) && (this.pos.y < vector.y) && (this.pos.y + this.height > vector.y))
};

Paddle.prototype.detectCollision = function(ball) {

	let pointA = this.collidePoint(createVector(ball.pos.x,ball.pos.y));
	let pointB = this.collidePoint(createVector(ball.pos.x+ball.size, ball.pos.y));
	let pointC = this.collidePoint(createVector(ball.pos.x, ball.pos.y+ball.size));
	let pointD = this.collidePoint(createVector(ball.pos.x+ball.size, ball.pos.y+ball.size));
	if ((pointA && pointC) || (pointB && pointD)) {
    if (this.pos.x < 200) {
      for (let i = 0; i < 10; i++) {
        boids_right.push(new Boid(ball.pos.x+random(0,5), ball.pos.y+random(0,5), 1));
      }
    } else {
      for (let i = 0; i < 10; i++) {
        boids_left.push(new Boid(ball.pos.x+random(-5,0), ball.pos.y+random(-5,0), -1));
      }
    }
		ball.vel.x *= -1;
  }
	if((pointC&&pointD)||(pointA&&pointB)) {
		ball.vel.y *= -1;
  }
};
