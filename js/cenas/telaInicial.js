class TelaInicial {
    constructor() {

    }

    draw() {
        
        this._imagemDeFundo();
        this._texto();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textAlign(CENTER);

        fill("#FFF");
        textFont(fonteLobster);
        textSize(80);
        text("Hipsta: a bruxinha descolada!", width/2, height/4);

        fill("#FFF");
        textFont(fonteVT323);
        textSize(40);
        text("pressione <espaço> para começar", width/2, height/1.1);
    }

    keyPressed(key) {
        if (key === " ") {
            estadoAtual = 'fase01';
        }
    }

}