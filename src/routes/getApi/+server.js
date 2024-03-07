
import {json} from "@sveltejs/kit";

export function GET(){
    let data = {
        id:1,
        name: 'John Doe',
    }
    return json(data);
}

export async function POST(requestEvent){
    const {request} = requestEvent;
    let {name} = await request.json();
    return json(name);
}