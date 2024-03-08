import { fetchData } from "$lib/api/server";

export async function load() {
    let options = {
       method: 'GET',
       headers: {
        'Accept': 'application/json' 
       },
    }
    let response = await fetchData('/elective/getSvelte', options); 
    return response;
}