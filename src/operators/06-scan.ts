import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) =>  acc + cur;

// Reduce
from( numeros )
.pipe(
    reduce( totalAcumulador )
)
// .subscribe( console.log );

// Scan
from( numeros )
.pipe(
    scan( totalAcumulador )
)
// .subscribe( console.log );

// Redux
interface Usuario {
    id?: string;
    token?: string;
    edad?: number;
}

const users: Usuario[] = [
    { id: 'andru', token: null  },
    { id: 'andru', token: '123' },
    { id: 'andru', token: 'ABC123' },
];

const state$ = from( users ).pipe(
    scan<Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 30 })
);

const id$ = state$
.pipe(map( state => state.id ))
.subscribe( console.log );