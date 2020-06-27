class TelaGameOver {
    constructor() {

    }

    draw() {
        noLoop();
        trilhaSonoraFase01.stop();
        somGameOver.play();
        this._texto();
    }

    _texto() {
        textAlign(CENTER);

        fill("#FFF");
        textFont(fonteVT323);
        textSize(100);
        text("GAME OVER", width/2, height/3);

        textFont(fonteVT323);
        textSize(40);
        text("pressione <espaço> para tentar novamente", width/2, height/2);
    }

    keyPressed(key) {
        if (key === " ") {
            estadoAtual = "fase01";
            fase01.setup();
            loop();
        }
    }
}