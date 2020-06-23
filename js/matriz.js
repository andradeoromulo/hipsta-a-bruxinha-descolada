class Matriz {
    constructor(imagem, alturaSprite, larguraSprite) {
        
        this.matriz = [];
        
        for (let i=0; i<imagem.height; i+=alturaSprite) {
            for (let j=0; j<imagem.width; j+=larguraSprite) {
                this.matriz.push([j, i]);
            }
        }
        
        return this.matriz;
          
    }
}