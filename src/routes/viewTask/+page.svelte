<script>


import {goto} from "$app/navigation";

function handletask(value){
    goto(`/viewTask/${value}`,{replaceState:true});
}

</script>


<h1>View Particular Task</h1>
<button on:click={() => {handletask(1)}}>Task 1</button>
<button on:click={() => {handletask(2)}}>Task 2</button>