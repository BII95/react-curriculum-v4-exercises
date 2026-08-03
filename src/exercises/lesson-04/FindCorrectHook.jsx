// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';
export default function FindCorrectHook() {
  const [clickCount, setClicks] = useState(0);

  function handleClick() {
    setClicks((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
//In this exercise useState was used to manage the click counter. Value is displayed in UI so to change that react must re render. setClicks updates the state functionally and allows the button's displayed cout to increment with each click.
