import { fetchData } from "$lib/api/server";

export async function load(requestEvent){
   
let {params} = requestEvent;
let { courseId }= params;

let options = {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({courseId}),
}

 let response =  await fetchData(`/elective/selectCourse`,options)
 return response;
}