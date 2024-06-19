import { acumularPuntos } from './acumular-puntos'
import { crearCarta } from './crear-carta'
import { pedirCarta } from './pedir-carta'
import { determinarGanador } from './determinar-ganador'

/**
 * 
 * @param {number} puntosJugador 
 * @param {string[]} deck 
 * @param {[]} puntosJugadores 
 * @param {[]} puntosHTML 
 */

// turno de la computadora
export const turnoComputadora = (puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
  let puntosComputadora = 0

  do {
    const carta = pedirCarta(deck)
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML)

    // se crea la carta
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores)

    if (puntosComputadora === 21) break

  } while ((puntosJugador <= 21) && (puntosComputadora <= puntosJugador))

    determinarGanador(puntosJugadores)
}