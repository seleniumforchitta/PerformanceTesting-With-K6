// Run the test above the baseline value - average value or the target value. And it can be 20% more or 100% more than the baseline value. 
import { sleep } from 'k6';
import http from 'k6/http';

// Below to describe how many vistual users & how many iterations 
export const options = {
    // Defining the satges for ramp-up, steady-load, ramp-down
    stages: [
        //Ramp-up
        {
            duration: '2m',
            target: 1000,// Target will be suddenly very very high - then it suddenly comes down 
            // 4 times of stress testing target
        },
        //Ramp-down
        {
            duration: '1m',
            target: 0,// Then for last 1m we are ramping down from 100 VUs to 0 in 1m
        },
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1); 
}