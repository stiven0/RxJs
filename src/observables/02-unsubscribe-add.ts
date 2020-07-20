
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('Next:', valor),
    error: err => console.warn('Error:', err),
    complete: () => console.log('Completado')   
};

const intervalo$ = new Observable<number>( subscriber => {
    
    let numero = 0;
    const interval = setInterval(() => {
        subscriber.next( numero++ );
        console.log(numero);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval( interval );
        console.log('Intervalo destruido');
    };
});

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

// encadenar subscripciones
subscription1.add( subscription2 )
             .add( subscription3 )


setTimeout(() => {
    subscription1.unsubscribe();

    console.log('Unsubscribe');
}, 6000);
