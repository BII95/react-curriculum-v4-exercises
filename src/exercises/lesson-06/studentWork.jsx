import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile';
import { filterTasks } from './utils/filterTasks';
import TaskFilterButtons from './components/TaskFilterButtons';
import SingleTask from './components/singleTask';

export default function StudentWork() {
  const studentName = 'Bryan';
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // #2: filterTasks done
  const visibleTasks = filterTasks(tasks, filter);

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
