var Local = function () {
    // 游戏对象
    var game;
    // 绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (ev) {
            if (ev.keyCode == 38) { // up

            } else if (ev.keyCode == 39) { // right
                game.right()
            } else if (ev.keyCode == 40) { // down
                game.down();
            } else  if (ev.keyCode == 37) { // left
                game.left();
            } else if (ev.keyCode == 32) { // space

            }
        }
    }
    // 开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        };
        game = new Game();
        game.init(doms)
        bindKeyEvent();
    };
    // 导出api
    this.start = start;
};