import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Herbes extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  Herbes(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    
for (let i = 0; i <= Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000; i++){
    let x =Math.random() *1890;
    let y =Math.random() * 990;
    let radius = 16;
    let couleur = 'green';

    

    ctx.beginPath();
    ctx.arc(x,y,radius,-0,1);
    ctx.fillStyle = couleur;
    ctx.fill();
    ctx.beginPath();
}

  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.Herbes(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Triangle,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    //forms.push(new Soleil(100, 100, 100, 100, 'red', 'red', 1, true, 50))
    forms.push(new Herbes(600, 100, 100, 100, '1', 'white', 7, false, 0))

    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
