import { sleep } from 'k6';
import http from 'k6/http';

// Below to describe how many vistual users & how many iterations 
export const options = {
    // Defining the satges for ramp-up, continue, ramp-down
    stages: [
        //Ramp-up
        {
            duration: '5s',
            target: 10,// Target we want to achieve - So here K6 will ramp-up the traffic from 1 to 100 in a duration of 5mins
        },
        //Continue
        {
            duration: '20s',
            target: 10,// We are staying with 100 VUs for 20mins
        },
        //Ramp-down
        {
            duration: '5s',
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