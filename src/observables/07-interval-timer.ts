
import { interval, timer } from 'rxjs';

const observer = {
    next: valor => console.log('Next:', valor),
    error: err => console.log('Error:',err),
    complete: () => console.log('Completado')
}


// const interval$ = interval(1000);
// const timer$    = timer(2000);
// const timer$ = timer(2000, 1000);

let hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const timer$ = timer( hoyEn5 );

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');

