
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.info('Complete')   
}

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {

    subs.next('Hola mundo!!');

    // subs.error('Error');

    subs.complete();

});  

obs$.subscribe( observer );


// obs$.subscribe( 
//     response => console.log(response),
//     error => console.warn(error),
//     () => console.log('Completado')
// );









