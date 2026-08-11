// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

//
// useRef hook references the input element and called its focus method when the button is clicked.After this, the cursor goes inside the input field automatically when the button is clicked. This is the appropriate hook because it gives acces to the DOM element and it does not cause a re-render for the rest of the page.
