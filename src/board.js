Board = function(width, height) {
    var PAN_SPEED = 1.5;

    var texture = PIXI.Texture.fromImage('img/seamless_cork_board_background.jpg');
    this.sprite = new PIXI.TilingSprite(texture, width, height);
    this.sprite.setInteractive(true);
    this.sprite.hitArea = new PIXI.Rectangle(0, 0, width, height);
    this.sprite.pointer = 'move';

    var board = this;

    this.sprite.mousedown = function(mouseData) {
        board.panning = true;
        board.lastPos = mouseData.global.clone();
    };

    this.sprite.mouseup = function(mouseData) {
        board.panning = false;
    };

    this.sprite.mouseupoutside = function(mouseData) {
        board.panning = false;
    };

    this.sprite.mousemove = function(mouseData) {
        if (!board.panning) return;
        var mousePos = mouseData.global.clone();
        board.sprite.parent.x += (mousePos.x - board.lastPos.x) * PAN_SPEED;
        board.sprite.parent.y += (mousePos.y - board.lastPos.y) * PAN_SPEED;
        board.lastPos = mousePos;
    };
};
