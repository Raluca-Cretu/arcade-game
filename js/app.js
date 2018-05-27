// Enemies our player must avoid
var Enemy = function(x,y,velX) {
    this.x = -100;
    this.y = y*70;
    this.velX = velX;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.velX*100*dt;
    if (this.x > 505){
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y){
    this.x = 100;
    this.y = 70;
    this.sprite = 'images/char-horn-girl.png';
};


// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(){
    
};

Player.prototype.render = function(){

};

Player.prototype.handleInput = function(){

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(0, 1, 1), new Enemy(0, 2, 3), new Enemy(0, 3, 2), new Enemy(-1, 3, 1)];
// Place the player object in a variable called player
var player = new Player(2,5);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
