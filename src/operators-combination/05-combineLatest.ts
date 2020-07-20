
import { interval, of, merge, timer, fromEvent, combineLatest } from 'rxjs';
import { take, tap, pluck, switchMap } from 'rxjs/operators';

// const keyup$ = fromEvent( document, 'keyup' );
// const click$ = fromEvent( document, 'click' );

// combineLatest( 
//     keyup$.pipe( pluck( 'type' ) ), 
//     click$.pipe( pluck( 'type' ) )
//     )
// .subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@mail.com';
input2.placeholder = '***';
input2.type = 'password';

document.querySelector('body').append( input1, input2 );

// helper
const getInputString$ = (elemento: HTMLElement) => 
fromEvent<KeyboardEvent>( elemento, 'keyup' )
.pipe( pluck<KeyboardEvent, string>( 'target', 'value' ) );


combineLatest( 
    getInputString$( input1 ),
    getInputString$( input2 ), 
)
.subscribe( console.log );
