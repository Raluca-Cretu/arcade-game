// Enemies our player must avoid
var Enemy = function(x,y,velX) {
    this.x = x*-100;
    this.y = y*70;
    this.velX = velX;
    this.sprite = 'images/enemy-bug.png';
    this.width = 20;
    this.height = 40;
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


Enemy.prototype.collision = function(Player) {
    if (this.x < Player.x + Player.width &&
       this.x + this.width > Player.x &&
       this.y < Player.y + Player.height &&
       this.height + this.y > Player.y) {
        alert('lalala');
    }
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x,y){
        this.x = x*100;
        this.y = y*80;
        this.sprite = 'images/char-horn-girl.png';
        this.width = 20;
        this.height = 40;
    };
    update(){
        if(this.y > 606){
            this.y = 80;
        }
        if (this.x > 505){
            this.x = 100;
        }
    };
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    handleInput(key){
        if(key=="left" && this.x > 0){
            this.x -= 100;
        }else if(key=="right" && this.x < 400){
            this.x += 100;
        }else if(key=="up" && this.y > 0){
            this.y -= 80;
        }else if(key=="down" && this.y < 400){
            this.y += 80;
        }
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(0, 1, 1), new Enemy(0, 2, 3), new Enemy(0, 3, 2), new Enemy(0, 3, 1)];
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
