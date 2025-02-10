import http from 'k6/http';
import {check} from 'k6'; // check for assertions

export default function(){
    const res = http.get('https://test.k6.io/');
    check(true, {
        'true is true': (value) => value === true // name of the property: value
    });
    // check() has 2 parameter - 1. some data may be response 2. an object containing all validations
}