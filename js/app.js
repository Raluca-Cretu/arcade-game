// Enemy class with update(), render() and collision() methods
var Enemy = function(x,y,velX) {
    this.x = x*-101;
    this.y = y*78;
    this.velX = velX;
    this.sprite = 'images/enemy-bug.png';
    this.width = 90;
    this.height = 50;
};

//Enemy position
Enemy.prototype.update = function(dt) {
    this.x += this.velX*100*dt;
    if (this.x > 505){
        this.x = -100;
    }
};

//Draw enemy on the canvas
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Enemy collison with the player
Enemy.prototype.collision = function(player) {
    if (this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
            restart();
            player.x= 200;
            player.y= 400;
    }
};


// Player class with an update(), render() and a handleInput() method.
var Player = function (x,y){
        this.x = x*101;
        this.y = y*83;
        this.sprite = 'images/char-horn-girl.png';
        this.width = 90;
        this.height = 50;
        this.points = 0;
};

//Player position
Player.prototype.update = function(){
        if(this.y > 606){
            this.y = 80;
        }
        if (this.x > 505){
            this.x = 100;
        }
        if (this.x > 0 && this.y < 80) {
            alert("You Won!.\n You manage to collect key.pointsCount key/ keys! \n Start again?");
            restart();
        }
        for (let i = 0; i < allEnemies.length; i++) {
           allEnemies[i].collision(this);
        }
        key.collision(this);
};

//Draw player on the canvas
Player.prototype.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player moves according to the key input
Player.prototype.handleInput = function(key){
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


// Key class with update(), render() and collision() methods
var Key= function(x, y) {
    this.x = x*100;
    this.y = y*80;
    this.sprite = 'images/Key.png';
    this.width = 90;
    this.height = 50;
    const points = document.getElementById("key");
    let pointsCount = 0;
    const self = this;
    setInterval(function() {key.update(); }.bind(this), 4000);
};

//Key position
Key.prototype.update = function() {
    this.x = Math.floor(Math.random() * 5) *100;
    this.y = (Math.floor(Math.random() * 3) +1) *80;
};

//Draw key on the canvas
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Key collison with the player
Key.prototype.collision = function(player) {
    if (this.x < player.x + player.width &&
       this.x + this.width > player.x &&
       this.y < player.y + player.height &&
       this.height + this.y > player.y) {
            console.log('key!!');
            this.pointsCount ++;
            this.points.innerHTML = key.pointsCount;
            this.update();
    }
};


// Instantiate the objects
var allEnemies = [new Enemy(0, 1, 1), new Enemy(0, 2, 3), new Enemy(0, 3, 2), new Enemy(0, 3, 1)];
var player = new Player(2, 5);
var key = new Key(2, 2);



// Game restart function
function restart() {
    alert("You lost.\nStart again!");
    key.points.innerHTML=0;
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
