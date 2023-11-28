const regresaTrue = () => {
    console.log('regrasa true');
    return true;
}

const regresaFalse = () => {
    console.log('regrasa false');
    return false;
}

console.warn('not o la negación');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true


console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true


console.log('==============');
console.log ( regresaFalse() && regresaTrue() ); // false
console.log ( regresaTrue() && regresaFalse() ); // false


console.log('======&&======');
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false ); //false


console.warn('OR'); // true
console.log( true || false );
console.log( false || false );

console.log ( regresaTrue() || regresaFalse() );
console.log( '4 condiciones', true || true || true || false ); //true



console.log( 'Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola mundo' && 150; 
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso'; 
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso' || true; 
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso' || true; 

console.log({ a1, a2, a3, a4, a5, });