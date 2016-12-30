function Game(){
	this.pad2 = new Paddle(40,height/2 - 80);
	this.pad1 = new Paddle(width - 40 - 30, height/2 - 80);

	this.height = height;
	this.width = width;

	this.ball = new Ball(this.width/2 - 10, this.height/2 - 10, 20);
}

Game.prototype.update = function () {
	//Handle keys in the key buffer
			if( keyIsDown(UP_ARROW) )//up
				(this.pad1.pos.y - this.pad1.vel < 0) ? 1 : (this.pad1.pos.y -= this.pad1.vel);
			if( keyIsDown(DOWN_ARROW) )  //down
				(this.pad1.pos.y + this.pad1.height + this.pad1.vel > height)?1:(this.pad1.pos.y+=this.pad1.vel);
			if( keyIsDown(87) )//W
				(this.pad2.pos.y - this.pad2.vel < 0) ? 1 : (this.pad2.pos.y -= this.pad2.vel);
			if( keyIsDown(83) )//S
				(this.pad2.pos.y + this.pad2.height + this.pad2.vel > height) ? 1 : (this.pad2.pos.y += this.pad2.vel);

	this.ball.pos.add(this.ball.vel);
	this.ball.handleWallCollision();
	this.pad1.detectCollision(this.ball);
	this.pad2.detectCollision(this.ball);
  //console.log(score1,score2);
};

Game.prototype.draw = function () {
	this.ball.draw();
	this.pad1.draw();
	this.pad2.draw();
};

Game.prototype.run = function () {
	this.update();
	this.draw();
};
