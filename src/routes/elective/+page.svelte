
<script>
  import Table from "$lib/table.svelte"; 
  export let data;
  console.log(JSON.stringify(data));
</script>

<h2>svelte</h2>

<Table tabledata={data} />
