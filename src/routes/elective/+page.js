import { fetchData } from "./api/server.js";

export async function load() {
    let options = {
       method: 'POST',
       headers: {
        'Accept': 'application/json' 
       },
    }
    let response = await fetchData('/elective/getSvelte', options); 
    return { response }
}