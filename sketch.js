let cenarioCamada01;
let cenarioCamada02;
let cenarioCamada03;
let cenarioCamada04;
let cenarioCamada05;

let imagemGameOver;
let imagemHipsta;
let imagemGotinha;
let imagemTroll;
let imagemGotinhaVoadora;

let trilhaSonora;
let somPulo;
let somGameOver;

let fonteVT323;

let pontuacao;

const matrizHipsta = [
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
const matrizGotinha = [
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
const matrizTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizGotinhaVoadora = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];

function preload() {
  cenarioCamada01 = loadImage("assets/img/cenario/ceu.png"); 
  cenarioCamada02 = loadImage("assets/img/cenario/fundo.png"); 
  cenarioCamada03 = loadImage("assets/img/cenario/intermediario.png");
  cenarioCamada04 = loadImage("assets/img/cenario/frente.png"); 
  cenarioCamada05 = loadImage("assets/img/cenario/chao.png");  
  imagemGameOver = loadImage("assets/img/icones/game-over.png");

  imagemHipsta = loadImage("assets/img/personagem/correndo.png");
  imagemGotinha = loadImage("assets/img/inimigos/gotinha.png");
  imagemTroll = loadImage("assets/img/inimigos/troll.png");
  imagemGotinhaVoadora = loadImage("assets/img/inimigos/gotinha-voadora.png");

  trilhaSonora = loadSound("assets/soundtrack/trilha_jogo.mp3");
  somPulo = loadSound("assets/soundtrack/somPulo.mp3");
  somGameOver = loadSound("assets/soundtrack/gameOver.mp3");

  fonteVT323 = loadFont("assets/fonts/VT323-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  pontuacao = new Pontuacao();

  cenario01 = new Cenario(cenarioCamada01, 1);
  cenario02 = new Cenario(cenarioCamada02, 1);
  cenario03 = new Cenario(cenarioCamada03, 2);
  cenario04 = new Cenario(cenarioCamada04, 3);
  cenario05 = new Cenario(cenarioCamada05, 4);
  trilhaSonora.loop();

  hipsta = new Personagem(matrizHipsta, imagemHipsta, 50, 15, 110, 135, 220, 270);

  const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width, 15, 52, 52, 104, 104, 8, 200);
  const troll = new Inimigo(matrizTroll, imagemTroll, width, -15, 200, 200, 400, 400, 8, 2500);
  const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, 200, 100, 75, 200, 150, 5, 1500);

  inimigos.push(gotinha);
  inimigos.push(troll);
  inimigos.push(gotinhaVoadora);

}

function draw() {
  cenario01.exibe();
  cenario02.exibe();
  cenario03.exibe();
  cenario04.exibe();
  cenario05.exibe();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  hipsta.exibe();
  hipsta.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (hipsta.estaColidindo(inimigo)) {
      noLoop();
      trilhaSonora.stop();
      image(imagemGameOver, width/2 - 250, height/2);
      somGameOver.play();
    }
  });
  
}

function keyPressed() {
  if (key === 'ArrowUp') {
    hipsta.pula();
  }
}