// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck'
import { crearDeck, crearCarta, pedirCarta, acumularPuntos, turnoComputadora } from './usecases'

/**
 * 2C = two of clubs - treboles
 * 2D = two of diamonds - diamantes
 * 2H = two of hearts - corazones
 * 2S = two of spades - espadas
 */

(() => {
  'use strict'

  let deck = []
  const tiposDeCarta = ['C', 'D', 'H', 'S'],
    tiposEspeciales = ['A', 'J', 'Q', 'K']

  let puntosJugadores = []

  // referenias HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener')

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small')

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tiposDeCarta, tiposEspeciales, [])
    puntosJugadores = []

    puntosHTML.forEach(elem => elem.innerText = 0)
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

    btnPedir.disabled = false
    btnDetener.disabled = false

    // crea un arreglo con la cantidad de jugadores. ejm: [0, 0], jugador - computadora
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0)
    }
  }  

  // eventos
  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck)
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML)

    // se crea la carta
    crearCarta(carta, 0, divCartasJugadores)

    // determinar si el jugador gano o perdio
    if (puntosJugador > 21) {
      btnPedir.disabled = true
      btnDetener.disabled = true

      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores)

    } else if (puntosJugador === 21) {
      btnPedir.disabled = true
      btnDetener.disabled = true

      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores)
    }
  })

  btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true
    btnDetener.disabled = true

    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores)
  })

  btnNuevo.addEventListener('click', () => {

    inicializarJuego()
  })

  // return {
  //   nuevoJuego: inicializarJuego
  // }

})()