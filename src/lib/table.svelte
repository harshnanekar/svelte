<script>
  export let tabledata;
  console.log(tabledata)
</script>

{#if tabledata && tabledata.length > 0}
  <table>
    <thead>
      <tr>
        {#each Object.keys(tabledata[0]) as key}
          <th>{key}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tabledata as row}
        <tr>
          {#each Object.values(row) as value}
            <td>{value}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <p>No data available</p>
{/if}