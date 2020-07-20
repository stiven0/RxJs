
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax({
    url,
    method: 'POST',
    body: { id: 1, token: 'ABC' },
    headers: {'Content-Type': 'application/json'}
})
.subscribe( console.log  );