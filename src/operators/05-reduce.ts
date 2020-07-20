

import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const totalReducer = (acc: number, valorAc: number) => {
    return acc + valorAc;
};

interval(500)
.pipe(
    take( 6 ),
    tap( console.log ),
    reduce( totalReducer, 0 )
)
.subscribe({
    next: val => console.log('Next:', val),
    complete: () => console.log('Completado')
})
