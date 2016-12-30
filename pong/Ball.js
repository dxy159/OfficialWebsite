function Ball(left, top, size) {
	this.pos = createVector(left, top);
	this.size = size;
	this.vel = createVector((Math.random() >= 0.5)?(Math.random() * 2 + 5) : (Math.random() * -2 - 5), (Math.random() >= 0.5)?(Math.random() * 2 + 5) : (Math.random() * -2 - 5));
}

Ball.prototype.move = function() {
	this.pos.add(this.vel);
};

Ball.prototype.draw = function() {
  fill(255,255,255);
  rect(this.pos.x, this.pos.y, this.size, this.size);
};

Ball.prototype.handleWallCollision = function(){
	if (this.pos.y <= 0 || this.pos.y >= height) {
		this.vel.y *= -1;
  }
	if (this.pos.x <= 0) {
    this.vel.x *= -1;
    //score1++;
  }
  if(this.pos.x + this.size >= width){
    //score2++;
    this.vel.x *= -1;
  }
};
