import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// const numeros$ = of<number | string>(1,'1',1,1,2,2,3,3,4,4,5,3,1);

// numeros$
// .pipe(
//     distinct(  )
// )
// .subscribe( console.log  )

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: 'batman'},
    {nombre: 'robin'},
    {nombre: 'joker'},
    {nombre: 'joker'},
];

from( personajes )
.pipe( distinct( ({ nombre }) => nombre ) )
.subscribe( console.log  )