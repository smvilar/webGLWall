WallApp = {};

WallApp.init = function() {
    var BOARD_WIDTH = 9000;
    var BOARD_HEIGHT = 6000;
    var CARD_COUNT = 400;

    WallApp.stage = new PIXI.Stage(0x2557a7);

    WallApp.renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
    $("body").append(WallApp.renderer.view);

    $(window).resize(WallApp.resize);

    var container = new PIXI.DisplayObjectContainer();
    WallApp.stage.addChild(container);

    // add board
    var board = new Board(BOARD_WIDTH, BOARD_HEIGHT);
    container.addChild(board.sprite);
    // center the board in the window
    board.pan($(window).width()/2, $(window).height()/2);
    board.zoom(-1);

    // add test cards
    for (var i = 0; i < CARD_COUNT; i++) {
        var card = new Card('Quisque molestie urna ac nisl euismod porttitor. Nullam iaculis, ligula molestie suscipit condimentum, diam risus interdum ante, ac aliquet nulla mi mattis lorem. Nam interdum est in sem venenatis, eget congue dolor faucibus. Maecenas at mi in odio euismod adipiscing. Nulla porta mauris nec pulvinar congue.');
        card.sprite.x = -BOARD_WIDTH/2 + Math.random() * BOARD_WIDTH;
        card.sprite.y = -BOARD_HEIGHT/2 + Math.random() * BOARD_HEIGHT;
        container.addChild(card.sprite);
    }

    // register mouse wheel event
    $(document).on('mousewheel', function(event) {
        event.preventDefault();
        var norm = event.deltaY / 1000;
        board.zoom(norm);
    })

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
