/**
 * 
 * @param {number[]} puntosJugadores 
 */

// determina quien gana
export const determinarGanador = (puntosJugadores) => {
  const [puntosJugador, puntosComputadora] = puntosJugadores
  
  setTimeout(() => {

    puntosJugador > 21 && puntosComputadora > 21
      ? alert('AMBOS HAN PERDIDO!!!')
      : puntosJugador > 21
        ? alert('EL JUGADOR HA PERDIDO!!!')
        : puntosComputadora > 21
          ? alert('LA COMPUTADORA HA PERDIDO!!!')
          : puntosComputadora === puntosJugador
            ? alert('ES UN EMPATE!!!')
            : puntosJugador > puntosComputadora
              ? alert('EL JUGADOR HA GANADO!!!')
              : alert('LA COMPUTADORA HA GANADO!!!')

  }, 100)
}