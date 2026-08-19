// # 3. Extract a Helper Function

// - Move the task filtering logic out of `StudentWork.jsx`.
// - Create a helper function that:
//   - Accepts the task list and filter value
//   - Returns the filtered tasks
//   - Contains no React code
// - Place this helper in a `utils/` folder and import it back into `StudentWork.jsx`.

export function filterTasks(tasks, filter) {
  if (filter === 'all') return tasks;
  return tasks.filter((task) => task.status === filter);
}
