 <script>
 import { page } from '$app/stores';

  // Define tasks object with correct syntax
  let tasks = {
    en: 'View Attendance',
    del: 'Delete Task'
  };

  // Destructuring tasklist from $page.params with default value 'en'
  let { tasklist = 'en' } = $page.params;

  // Retrieving the appropriate task based on tasklist
  let task = tasks[tasklist];
</script>

<h1>View {task}</h1>