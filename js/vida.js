class Vida {
    constructor(maximo, quantidadeInicial) {
        this.maximo = maximo;
        this.quantidadeInicial = quantidadeInicial;
        this.vidas = quantidadeInicial;

        this.largura = 35;
        this.altura = 35;

        this.xInicial = 40;
        this.yInicial = 30;
    }

    exibe() {

        for (let i=0; i<this.vidas; i++) {
            const posicao = this.xInicial * (i+1);
            const margem = i * 20;

            image(imagemVida, (posicao+margem), this.yInicial, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.maximo)
            this.vidas--;
    }

    perdeVida() {
        this.vidas--;
    }
}