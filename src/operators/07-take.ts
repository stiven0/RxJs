import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);

numeros$
.pipe(
    tap( valor => console.log('Tap', valor) ),
    take(3)
)
.subscribe({
    next: valor => console.log('Next:', valor),
    complete: () => console.log('Complete')
})