import _ from 'underscore'

/**
 * 
 * @param {string[]} tiposDeCarta 
 * @param {string[]} tiposEspeciales 
 * @param {[]} deck 
 * @returns {string[]}
 */

// crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales, deck) => {
  
  if (!tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('tiposDeCarta es obligatorio como un string[]')
  
  if (!tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales es obligatorio como un string[]')

  for (let i = 2; i <= 10; i++) {

    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo)
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo)
    }
  }

  return _.shuffle(deck)
}