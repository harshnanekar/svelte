<script>
export let data;
let tasks = data.task
</script>

<h1>Header...</h1>
{#each tasks as task }
<p>{task.id} , {task.name}</p>
{/each}