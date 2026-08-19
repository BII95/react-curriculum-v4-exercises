export function filterTasks(tasks, filter) {
  if (filter === 'all') return tasks;
  return tasks.filter((task) => task.status === filter);
}
