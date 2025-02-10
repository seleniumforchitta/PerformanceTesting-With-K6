// Run the test above the baseline value - average value or the target value. And it can be 20% more or 100% more than the baseline value. 
import { sleep } from 'k6';
import http from 'k6/http';

// Below to describe how many vistual users & how many iterations 
export const options = {
    // Defining the satges for ramp-up, steady-load, ramp-down
    stages: [
        //Ramp-up
        {
            duration: '2h', // Very long hours of test
            target: 10000,// Target will be suddenly very very high - But it will go to that target gradually in 2hrs
            // Where it will break we can manually stop the test know how many user it can handle 
            // Killing the test will not give any out put but we can redirect the out put to a file or server to know the no of user at which it broke.
        }
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1); 
}