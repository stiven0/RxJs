
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('Next:', valor),
    error: err => console.warn('Error:', err),
    complete: () => console.log('Completado')   
};

const intervalo$ = new Observable<number>( subscriber => {

    const intervalo = setInterval(() => {
        subscriber.next( Math.random() )
    }, 1000);

    return () => {
        clearInterval( intervalo );
        console.log('oerr');
    }

});

const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(() => {

    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();

}, 3500);


// const subs1 = intervalo$.subscribe( ramdon => console.log('Subs1', ramdon) );
// const subs2 = intervalo$.subscribe( ramdon => console.log('Subs2', ramdon) );
