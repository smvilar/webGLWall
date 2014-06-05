WallApp = {};

WallApp.init = function() {
    var BOARD_WIDTH = 900//0;
    var BOARD_HEIGHT = 600//0;
    var CARD_COUNT = 1000;

    WallApp.stage = new PIXI.Stage(0x2557a7);

    // let pixi choose WebGL or canvas
    WallApp.renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());

    $(window).resize(WallApp.resize);

    // attach render to page
    $("body").append(WallApp.renderer.view);

    var container = new PIXI.DisplayObjectContainer();
    WallApp.stage.addChild(container);

    // add board
    var board = new Board(BOARD_WIDTH, BOARD_HEIGHT);
    container.addChild(board.sprite);

    // add test cards
    for (var i = 0; i < CARD_COUNT; i++) {
        var card = new Card('Quisque molestie urna ac nisl euismod porttitor. Nullam iaculis, ligula molestie suscipit condimentum, diam risus interdum ante, ac aliquet nulla mi mattis lorem. Nam interdum est in sem venenatis, eget congue dolor faucibus. Maecenas at mi in odio euismod adipiscing. Nulla porta mauris nec pulvinar congue.');
        card.sprite.x = Math.random() * BOARD_WIDTH;
        card.sprite.y = Math.random() * BOARD_HEIGHT;
        container.addChild(card.sprite);
    }

    requestAnimFrame(WallApp.gameLoop);
};

WallApp.resize = function() {
    WallApp.renderer.resize($(window).width(), $(window).height());
};

WallApp.gameLoop = function() {
    requestAnimFrame(WallApp.gameLoop);
    WallApp.renderer.render(WallApp.stage);
};

$(document).ready(function() {
    WallApp.init();
});
