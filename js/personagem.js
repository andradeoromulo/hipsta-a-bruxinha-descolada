class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - this.altura - 15;
    this.y = this.yInicial;

    this.gravidade = 3;
    this.velocidadePulo = 0;
    this.contadorPulo = 0;
  }

  pula() {
    if (this.contadorPulo < 2) {
      this.velocidadePulo = -30;
      somPulo.play();

      this.contadorPulo++;
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.contadorPulo = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;

    const colisao = collideRectRect(
      this.x, this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x, inimigo.y,
      inimigo.largura * precisao, 
      inimigo.altura * precisao
    );

    return colisao;
  }
}
