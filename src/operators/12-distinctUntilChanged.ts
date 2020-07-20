import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, tap } from 'rxjs/operators';

// const numeros$ = of<number | string>(1,'1',1,1,2,2,3,3,4,4,5,3,1);

// numeros$
// .pipe(
//     distinctUntilChanged()
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
.pipe( 
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre ) 
)
.subscribe( console.log  )