import { sleep } from 'k6';
import http from 'k6/http';

// Below to describe how many vistual users & how many iterations 
export const options = {
    vus: 1,
    duration: '10s',
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1); // 1 sec it will sleep
    http.get('https://test.k6.io/contacts.php')
    sleep(1);
    http.get('https://test.k6.io/news.php')
}