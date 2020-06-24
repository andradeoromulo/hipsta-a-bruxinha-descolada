let cenarioCamada01;
let cenarioCamada02;
let cenarioCamada03;
let cenarioCamada04;
let cenarioCamada05;
let imagemPersonagem;
let imagemInimigo;
let trilhaSonora;
let somPulo;
let somGameOver;

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];
const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
];

function preload() {
  cenarioCamada01 = loadImage("../img/cenario/ceu.png"); 
  cenarioCamada02 = loadImage("../img/cenario/fundo.png"); 
  cenarioCamada03 = loadImage("../img/cenario/intermediario.png");
  cenarioCamada04 = loadImage("../img/cenario/frente.png"); 
  cenarioCamada05 = loadImage("../img/cenario/chao.png");  

  imagemPersonagem = loadImage("../img/personagem/correndo.png");
  imagemInimigo = loadImage("../img/inimigos/gotinha.png");

  trilhaSonora = loadSound("../sons/trilha_jogo.mp3");
  somPulo = loadSound("../sons/somPulo.mp3");
  somGameOver = loadSound("../sons/gameOver.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  cenario01 = new Cenario(cenarioCamada01, 1);
  cenario02 = new Cenario(cenarioCamada02, 1);
  cenario03 = new Cenario(cenarioCamada03, 2);
  cenario04 = new Cenario(cenarioCamada04, 3);
  cenario05 = new Cenario(cenarioCamada05, 4);
  trilhaSonora.loop();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 110, 135, 220, 270);

  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 52, 52, 104, 104);
}

function draw() {
  cenario01.exibe();
  cenario02.exibe();
  cenario03.exibe();
  cenario04.exibe();
  cenario05.exibe();
  personagem.exibe();
  personagem.aplicaGravidade();
  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    noLoop();
    trilhaSonora.stop();
    somGameOver.play();
  }
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
  }

}