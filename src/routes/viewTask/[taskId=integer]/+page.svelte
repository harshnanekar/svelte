<script>

import {page} from "$app/stores"
import Table from "$lib/table.svelte";


const {taskId} = $page.params

</script>

<h1>Task No. {taskId}</h1>

<Table />