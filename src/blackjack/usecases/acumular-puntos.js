import { valorCarta } from './valor-carta'

/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {array} puntosJugadores
 * @param {NodeListOf<HTMLElement>} puntosHTML
 * @returns 
 */

// turno 0: primer jugador, 1: segundo jugador... ultimo: computadora
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  console.log({ carta, turno, puntosJugadores, puntosHTML })
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
  puntosHTML[turno].innerText = puntosJugadores[turno]

  return puntosJugadores[turno]
}