import { useState } from 'react';
import UserProfile from './components/UserProfile';
import { filterTasks } from './utils/filterTasks';
import TaskFilterButtons from './components/TaskFilterButtons';
import SingleTask from './components/singleTask';
import useTasks from './hooks/useTasks';
export default function StudentWork() {
  const studentName = 'Bryan';
  // const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  // const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together
  const { tasks, loading } = useTasks();
  // #2: filterTasks done
  const visibleTasks = filterTasks(tasks, filter);
  if (loading) {
    return <p>Loading tasks...</p>;
  }
  return (
    <div>
      {/*#3 userprof done */}
      <UserProfile studentName={studentName} />

      {/* #4:filter buttons done */}
      <div>
        <TaskFilterButtons filter={filter} setFilter={setFilter} />
      </div>
      {/* #5: Inline list rendering */}
      <div>
        <SingleTask visibleTasks={visibleTasks} />
      </div>
    </div>
  );
}
