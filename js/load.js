function preload() {
  cenarioCamada01 = loadImage("assets/img/cenario/ceu.png"); 
  cenarioCamada02 = loadImage("assets/img/cenario/fundo.png"); 
  cenarioCamada03 = loadImage("assets/img/cenario/intermediario.png");
  cenarioCamada04 = loadImage("assets/img/cenario/frente.png"); 
  cenarioCamada05 = loadImage("assets/img/cenario/chao.png");  
  imagemGameOver = loadImage("assets/img/icones/game-over.png");
  imagemTelaInicial = loadImage("assets/img/cenario/telaInicial.png");
  imagemVida = loadImage("assets/img/icones/coracao.png");
  jsonFase01 = loadJSON("maps/mapaFase01.json");

  imagemHipsta = loadImage("assets/img/personagem/correndo.png");
  imagemGotinha = loadImage("assets/img/inimigos/gotinha.png");
  imagemTroll = loadImage("assets/img/inimigos/troll.png");
  imagemGotinhaVoadora = loadImage("assets/img/inimigos/gotinha-voadora.png");

  trilhaSonoraFase01 = loadSound("assets/soundtrack/trilha_jogo.mp3");
  somPulo = loadSound("assets/soundtrack/somPulo.mp3");
  somGameOver = loadSound("assets/soundtrack/gameOver.mp3");

  fonteVT323 = loadFont("assets/fonts/VT323-Regular.ttf");
  fonteLobster = loadFont("assets/fonts/Lobster-Regular.ttf");
}