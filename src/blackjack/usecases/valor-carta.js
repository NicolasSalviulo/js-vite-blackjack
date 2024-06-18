
/**
 * Devuelve el valor numer de la carta
 * @param {Array<string>} carta 
 * @returns una valor numerico
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}