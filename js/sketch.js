let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaSonora;

function preload() {
  imagemCenario = loadImage("../img/cenario/floresta.png"); 
  imagemPersonagem = loadImage("../img/personagem/correndo.png");
  trilhaSonora = loadSound("../sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  trilhaSonora.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}