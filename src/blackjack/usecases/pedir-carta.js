
/**
 * 
 * @param {Array<string>} deck  Es un arreglo de string
 * @returns {string} Devuelve una carta del deck
 */
export const pedirCarta = (deck) => {

    if(!deck  || deck.length === 0) {
        throw Error("No hay cartas en el deck");
    }

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}