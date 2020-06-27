class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textSize(80);
        fill("#FFF");
        textFont(fonteVT323);
        textAlign(RIGHT);
        text(this.constroiPontuacao(), width-40, 70);
    }

    constroiPontuacao() {

        return ("00000" + parseInt(this.pontos)).slice(-5);
    }

    zerar() {
        this.pontos = 0;
    }

    adicionarPonto() {
        this.pontos += 0.2;
    }
}