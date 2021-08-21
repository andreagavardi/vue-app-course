//importp axios in un file dedicato nella cartella services così 
//da non doverlo utilizzare in tutti i file in cui mi serve una chiamata API
import axios from 'axios';
//setto una costante per le chiamate specifice agli eventi
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/andreagavardi/fakeserver',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})
export default{
    getEvents(){
        return apiClient.get('/events')
    }
}
