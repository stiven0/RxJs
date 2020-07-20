
import { from, of } from 'rxjs';

const observer = {
    next: val => console.log('Next:', val),
    complete: () => console.log('Complete')    
};

// funciones generadores
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const miIterable = miGenerador();

from( miIterable ).subscribe( observer );

// for( let i of miIterable ){
//     console.log(i);
// }



// const src$ = of( ...[1,2,3,4,5] );
// const src$ = from( 'robert' );

// const src$ = from( fetch('https://api.github.com/users/stiven0') );

// src$.subscribe( async (resp) =>  {
//     const resp2 = await resp.json();
//     console.log(resp2);
// });



// src$.subscribe( observer );

