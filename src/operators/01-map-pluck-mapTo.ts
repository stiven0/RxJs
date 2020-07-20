
import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1,5)
// .pipe(
//    map<number, number>( val => val * 10 )    
// )
// .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// keyup$
// .pipe(
//     map( event => event.code )
// )

// keyup$
// .pipe(
//     pluck('path', '0', 'baseURI')
// )


keyup$
.pipe(
    mapTo<KeyboardEvent, string>( 'hola' )
)

.subscribe( console.log );
