import http from 'k6/http';
import {check} from 'k6'; // check for assertions
import { sleep } from 'k6';

export const options = {
    vus : 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<500'], // We want 95% response to be below 500ms
        http_req_duration: ['max<3000'], // Buut we don't want even the slowest response to be less than 2secs
        // o/p - ✓ http_req_duration..............: avg=248.38ms min=215.4ms  med=228.31ms max=2.4s     p(90)=300.44ms p(95)=308.42ms
        // here the max took 2.4 secons and 95% of the responses were within 308 ms
        http_req_failed: ['rate<0.01'],
        http_reqs: ['rate>4'], // we have 2 metrice available count & rate
        // From the O/P -  http_reqs......................: 329     32.226885/s - Means total 329 request * rate is 32 request per second
        vus: ['value>9']
    }
}

export default function(){
    const res = http.get('https://test.k6.io/');
    check(res, {
        'status is 200': (response) => response.status === 200, // name of the property: value
        'page is start page': (response) => response.body.includes('Collection of simple web-pages suitable for load testing') === true // we can remove  '=== true' here
    });
    //sleep(2);
}