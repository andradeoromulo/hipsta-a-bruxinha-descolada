class Fase01 {
    constructor() {

        this.indice = 0;
        this.mapa  = jsonFase01.mapa;
    }

    setup() {

        cenario01 = new Cenario(cenarioCamada01, 1);
        cenario02 = new Cenario(cenarioCamada02, 1);
        cenario03 = new Cenario(cenarioCamada03, 2);
        cenario04 = new Cenario(cenarioCamada04, 3);
        cenario05 = new Cenario(cenarioCamada05, 4);
        trilhaSonoraFase01.loop();

        pontuacao = new Pontuacao();
        vida = new Vida(jsonFase01.configuracoes.vidaMaxima, jsonFase01.configuracoes.vidaInicial);

        hipsta = new Personagem(matrizHipsta, imagemHipsta, 50, 15, 110, 135, 220, 270);

        const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width, 15, 52, 52, 104, 104, 8);
        const troll = new Inimigo(matrizTroll, imagemTroll, width, -15, 200, 200, 400, 400, 8);
        const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, 200, 100, 75, 200, 150, 5);

        inimigos.push(gotinha);
        inimigos.push(troll);
        inimigos.push(gotinhaVoadora);
    }

    draw() {

        cenario01.exibe();
        cenario02.exibe();
        cenario03.exibe();
        cenario04.exibe();
        cenario05.exibe();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        vida.exibe();

        hipsta.exibe();
        hipsta.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();
        
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > (this.mapa.length-1)) {
                this.indice = 0;
            }
        }

        if (hipsta.estaColidindo(inimigo)) {
            vida.perdeVida();
            hipsta.tornaInvencivel();

            if (vida.vidas === 0) {
                noLoop();
                image(imagemGameOver, width/2-200, height/2);
                trilhaSonoraFase01.pause();
                somGameOver.play();
            }
        }
    }

    keyPressed(key) {
        if (key === "ArrowUp" || key === " ") {
            hipsta.pula();
        }
    }
}