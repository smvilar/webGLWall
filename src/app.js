WallApp = {};

WallApp.init = function() {
    WallApp.stage = new PIXI.Stage(0x2557a7);

    // let pixi choose WebGL or canvas
    WallApp.renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());

    $(window).resize(WallApp.resize);

    // attach render to page
    $("body").append(WallApp.renderer.view);

    var texture = PIXI.Texture.fromImage('img/leaf.png');
    var leaf = new PIXI.Sprite(texture);

    // rotate around center
    leaf.anchor.x = 0.5;
    leaf.anchor.y = 0.5;

    // center in stage
    leaf.position.x = WallApp.renderer.width / 2;
    leaf.position.y = WallApp.renderer.height / 2;

    // place it on the stage for rendering
    WallApp.stage.addChild(leaf);

    requestAnimFrame(WallApp.gameLoop);
}

WallApp.resize = function() {
    WallApp.renderer.resize($(window).width(), $(window).height());
}

WallApp.gameLoop = function() {
    requestAnimFrame(WallApp.gameLoop);
    $.each(WallApp.stage.children, function(i, child) {
        child.rotation -= 0.02;
    });
    WallApp.renderer.render(WallApp.stage);
}

$(document).ready(function() {
    WallApp.init();
});
