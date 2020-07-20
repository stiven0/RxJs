import { fromEvent, of } from 'rxjs';
import { map, tap, switchMap, mergeAll, pluck, mergeMap, exhaustMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// manejar error
const manejarError = ( error: Response ) => {
    console.log('Error:', error);
    return of('Ha ocurrido un error');
};

// helper
const peticionHttpLogin = userPass => 
                          ajax.post( 'https://reqres.in/api/login?delay=1', userPass )
                          .pipe( 
                                pluck( 'response', 'token' ),
                                catchError( manejarError ) 
                          );

// forms
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const btnSubmit = document.createElement('button');


// config
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

btnSubmit.innerText = 'Login';

form.append( inputEmail, inputPassword, btnSubmit );

document.querySelector('body').append( form );


// streams
const submitForm$ = fromEvent( form, 'submit' )
.pipe( 
    tap( event => event.preventDefault() ),
    map( ({ target }) =>  ( {email: target[0].value, password: target[1].value } ) ),
    exhaustMap( peticionHttpLogin )
);

submitForm$
.subscribe( console.log );
