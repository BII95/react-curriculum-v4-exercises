// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState, useRef } from 'react';
export default function FindCorrectHook() {
  const [clickCount, setClicks] = useState(0);
  const countRef = useRef(null);

  function handleClick() {
    countRef.current = setClicks((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
