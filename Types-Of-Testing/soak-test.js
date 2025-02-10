import { sleep } from 'k6';
import http from 'k6/http';

// Below to describe how many vistual users & how many iterations 
export const options = {
    // Defining the satges for ramp-up, steady-load, ramp-down
    stages: [
        //Ramp-up
        {
            duration: '5m',
            target: 1000,// Target we want to achieve - So here K6 will ramp-up the traffic from 1 to 1000 in a duration of 5mins
        },
        //Steady-Load
        {
            duration: '8h', // Run it for a VERY long time staying at a 1000 vu load
            target: 1000,
            // memory leak can happen
            // disc space getting filled
        },
        //Ramp-down
        {
            duration: '5m',
            target: 0,// Then for last 5mins we are ramping down from 100 VUs to 0 in 5mins
        },
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1); // 1 sec it will sleep
    http.get('https://test.k6.io/contacts.php')
    sleep(1);
    http.get('https://test.k6.io/news.php')
}