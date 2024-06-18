import _ from 'underscore';

/**
 * Esta funcion crar un nuevo Deck
 * @param {array<string>} tiposDeCarta Ejemplo: 'C','D','H','S'
 * @param {array<string>} tiposEspeciales  Ejemplo: 'A','J','Q','K'
 * @returns {array<string>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error("Los tipos de carta son obligatorios");

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error("Los tipos especiales de carta son obligatorios");

    let deck         = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}