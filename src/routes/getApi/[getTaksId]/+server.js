import {json} from "@sveltejs/kit"

export async function PATCH(requestEvent){
    let obj = [{id:1,name:'John'},{id:2,name:'Peter'}];
    const {params,request} = requestEvent;
    let {getTaksId} = params;
    let {name} = await request.json();

    console.log(name)
    
    obj.forEach(data => {
   
     if(data.id == getTaksId){
       data.name = name;
     }   
    })

  //  let tasks = obj.filter(data => data.id == getTaksId ? data.name=uname : data).map(d => d).join('');

    return json(obj);

}