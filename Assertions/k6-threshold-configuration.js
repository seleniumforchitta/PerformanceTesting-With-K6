import http from 'k6/http';
import {check} from 'k6'; // check for assertions
import { sleep } from 'k6';

export const options = {
    vus : 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100'],
        http_req_failed: ['rate<0.01']
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