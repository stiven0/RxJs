
import { ajax, AjaxError } from 'rxjs/ajax';
import { first, take, map, filter, catchError, pluck } from 'rxjs/operators';
import { of, throwError } from 'rxjs';


const url = 'https://api.github.com/users?per_page=5';

// fetch( url )
//     .then( result => result.json() )
//     .then( console.log  )
//     .catch( err => console.log(err) );

const manejarError = ( error: AjaxError ) => {
    console.warn('Error', error.response);
    return of([]);
};

ajax( url )
.pipe( 
    pluck('response'),
    catchError( manejarError )
)
.subscribe( console.log );