class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.frameAtual = 0;

        this.imagem = imagem;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - altura - variacaoY;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
    }

    exibe() {
        
        /* Parâmetros:
        imagem
        x e y para posicionar dentro do canvas
        largura e altura da imagem no canvas
        x e y para posicionar dentro do sprite
        largura e altura do corte dentro do sprite
        */

        image(this.imagem, 
            this.x, this.y, 
            this.largura, this.altura,
            this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
            this.larguraSprite, this.alturaSprite);

        this.anima();
    }

    anima() {
        this.frameAtual++;

        if (this.frameAtual >= this.matriz.length - 1) 
            this.frameAtual = 0;
    }

}