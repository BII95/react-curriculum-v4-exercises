// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delayId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(delayId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

//StrictMode helps us catch this bug by double rendering components. This finds functions with sideeffects and memory leaks.In this case useEffect created multiple intervals running simultaneously. This was fixed by running an empty dependency array and a cleanup function to remove the interval on unmount.
