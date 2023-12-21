import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine des fleurs
 */
export class Fleurs extends AbstractForm {
  // Ajoute des valeurs par défaut pour éviter les erreurs avec des arguments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
  }

  Fleurs(ctx, dx, dy) {
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy;
    const colors = ['yellow', 'pink', 'purple', 'blue'];
    for (let i = 0; i < 20; i++) {
      let x = Math.random() * 1890;
      let y = Math.random() * 800;
      let fleurRadius = 2;
      let petalRadius = 3;
      let fleurColor = 'yellow';
      let petalColor = colors[i % colors.length];

      // Dessiner la fleur (cercle central)
      ctx.beginPath();
      ctx.arc(x, y, fleurRadius, 0, 2 * Math.PI);
      ctx.fillStyle = fleurColor;
      ctx.fill();

      // Dessiner les pétales (petits cercles autour de la fleur)
      for (let j = 0; j < 6; j++) {
        let angle = (j / 6) * (2 * Math.PI);
        let petalX = x + 10 * Math.cos(angle);
        let petalY = y - 10 * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(petalX, petalY, petalRadius, 0, 2 * Math.PI);
        ctx.fillStyle = petalColor;
        ctx.fill();
      }
    }
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();
    this.Fleurs(ctx, this.x, this.y);
    ctx.restore();
  }

  /**
   * Obtient un tableau d'objets de cette classe
   * @return {[Fleurs,...]}
   */
  static buildForms() {
    let forms = [];
    forms.push(new Fleurs(600, 100, 100, 100, '1', 'green', 2, false, 2));
    console.log('Nombre de fleurs : ' + forms.length);
    return forms;
  }
}
