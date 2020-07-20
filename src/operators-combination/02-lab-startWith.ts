import { startWith, endWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const loadingDiv = document.createElement( 'div' );
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

// strem
ajax.getJSON( 'https://reqres.in/api/users/2?delay=2' )
.pipe(
    startWith( true ),
    endWith( false )
)
.subscribe( bandera => {
    console.log(bandera);
    
    if( bandera === true ){
        body.append( loadingDiv );
    } else {
        loadingDiv.style.display = 'none';
    }
});

