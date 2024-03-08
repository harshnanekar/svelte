<script>
import Table from "$lib/table.svelte";

export let data
console.log(data);
</script>
<h1>View Particular Course</h1>
<Table tabledata={data.course} />
