import { fromEvent, Observable } from 'rxjs';

import { pluck, map, debounceTime, mergeAll, mergeMap, tap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { GithubUsers } from '../interfaces/github-users';
import { GithubUser } from '../interfaces/github-user';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {

    orderList.innerHTML = '';
    for( const usuario of usuarios ){
        let item = document.createElement( 'li' );

        let imagen = document.createElement( 'img' );
        imagen.src = usuario.avatar_url;

        let anchor = document.createElement( 'a' );
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';  

        item.append( imagen );
        item.append( usuario.login + ' ');
        item.append( anchor );
        orderList.append( item );
    }

};

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$
.pipe(
    debounceTime<KeyboardEvent>( 500 ),
    pluck<KeyboardEvent, string>( 'target', 'value' ),
    mergeMap<string, Observable<GithubUsers>>( value => ajax.getJSON( `https://api.github.com/search/users?q=${ value }` ) ),
    pluck<GithubUsers, GithubUser[]>( 'items' )
)
// .subscribe( mostrarUsuarios );


const url = 'https://httpbin.org/delay/1?arg=';

input$
.pipe(
    pluck( 'target', 'value' ),
    switchMap( texto => ajax.getJSON( url + texto ).pipe( tap( x => console.log('Tap', x)  ) ) )
)
.subscribe( console.log )

