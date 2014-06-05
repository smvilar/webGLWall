Card = function(textToDisplay) {
    var TEXT_OFFSET = 20;
    // hardcoded because for some reason the sprite won't give me the right size
    var WIDTH = 297;
    var HEIGHT = 298;

    this.sprite = new PIXI.Sprite.fromImage('img/yellow-post-it-note-md.png');
    this.sprite.setInteractive(true);

    var text = new PIXI.Text(textToDisplay, {
        font:'10pt Helvetica', align:'center',
        wordWrap:true, wordWrapWidth:WIDTH-TEXT_OFFSET
    });
    // offset the text
    text.x = TEXT_OFFSET;
    text.y = TEXT_OFFSET;

    this.sprite.addChild(text);

    var card = this;

    this.sprite.mouseover = function(mouseData) {
        //card.overlay.visible = true;
    };

    this.sprite.mouseout = function(mouseData) {
        //card.overlay.visible = false;
    };

    this.sprite.mousedown = function(mouseData) {
        card.dragging = true;
        card.lastPos = mouseData.getLocalPosition(card.sprite.parent);
    };

    this.sprite.mouseup = function(mouseData) {
        card.dragging = false;
    };

    this.sprite.mouseupoutside = function(mouseData) {
        card.dragging = false;
    };

    this.sprite.mousemove = function(mouseData) {
        if (!card.dragging) return;
        var mousePos = mouseData.getLocalPosition(card.sprite.parent);
        card.sprite.x += mousePos.x - card.lastPos.x;
        card.sprite.y += mousePos.y - card.lastPos.y;
        card.lastPos = mousePos;
    };
};
