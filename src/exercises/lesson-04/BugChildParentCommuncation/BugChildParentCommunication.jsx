//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}
//
//The solution was implemented by moving the counter state to the parent component. The increment function was pased to the child component as a prop. When the child's button is clicked it calls the helper function provided by the parent and the counter increments and updates the displayed value. The child triggers state updates without managing the state directly.
