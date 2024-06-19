/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */

// crea la imagen de la carta
export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement('img')
  imgCarta.classList.add('carta')
  imgCarta.src = `./assets/cartas/${carta}.png`

  divCartasJugadores[turno].append(imgCarta)
}