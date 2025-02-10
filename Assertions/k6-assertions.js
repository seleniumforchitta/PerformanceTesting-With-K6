import http from 'k6/http';
import {check} from 'k6'; // check for assertions

export default function(){
    const res = http.get('https://test.k6.io/');
    check(res, {
        'status is 200': (response) => response.status === 200, // name of the property: value
        'page is start page': (response) => response.body.includes('Collection of simple web-pages suitable for load testing') === true // we can remove  '=== true' here
    });
    check(res, {
        'page is start page': (response) => response.body.includes('Collection of simple web-pages suitable for load testing') === true // we can remove  '=== true' here
    });
}