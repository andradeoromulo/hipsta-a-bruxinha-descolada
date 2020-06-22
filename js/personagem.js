function calculaMatriz(imagem, alturaPersonagem, larguraPersonagem) {
  let matriz = [];

  for (let i=0; i<imagem.height; i+=alturaPersonagem) {
    for (let j=0; j<imagem.width; j+=larguraPersonagem) {
      matriz.push([j, i]);
    }
  }

  return matriz;
}

class Personagem {
  constructor(imagem) {
    this.imagem = imagem;

    this.alturaPersonagem = 270;
    this.larguraPersonagem = 220;

    this.matriz = calculaMatriz(imagem, this.alturaPersonagem, this.larguraPersonagem);

    this.frameAtual = 0;
  }

  exibe() {
    let xTela = 50;
    let yTela = height - 150;

    /* Parâmetros:
      imagem
      x e y para posicionar dentro do canvas
      largura e altura da imagem no canvas
      x e y para posicionar dentro do sprite
      largura e altura do corte dentro do sprite
    */
    image(this.imagem, 
      xTela, yTela, 
      this.larguraPersonagem/2, this.alturaPersonagem/2,
      this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
      this.larguraPersonagem, this.alturaPersonagem);

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length)
      this.frameAtual = 0;
  }
}