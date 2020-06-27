function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  fase01 = new Fase01();
  fase01.setup();

  telaInicial = new TelaInicial();

  estados = {
    fase01,
    telaInicial,
  }
}

function draw() {
  estados[estadoAtual].draw();
}

function keyPressed() {
  if (estadoAtual === "telaInicial") {
    telaInicial.keyPressed(key);
  } else {
    fase01.keyPressed(key);
  }
  
}