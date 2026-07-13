//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let nameVar = 'Bryan';
  let age = 23;
  const hobbies = ['Baking', 'Gym', 'Foodie', 'Football'];
  return (
    <div>
      <h1>AbOuT BrYan!</h1>
      {/* add JSX here */}
      <p>
        {' '}
        Hi im Bryan! I am 23,from Houston, and I am a first-gen graduate from UT
        Austin. I am taking CTD courses to expand or open opportunities for
        myself. Outside of programming my hobbies include baking, going to the
        gym, being a foodie, and football. I like to bake because it is work you
        can reward yourself with. I enjoy following recipes to make sweet treats
        and different kinds of bread. I enjoy trying new and popular foods.
        Throughout the week I survey the internet for restaurants to try and
        recipes to make ,on the weekends usually. Among my favorites are Texas
        BBQ, Mexican food, and Hot chicken. Because of this, my weekdays are
        focused on being active. I enjoy going to the gym to lift and run.
        Beyond this I like playing football-soccer with my friends. Recently I
        have been enjoying the exciting matches the world cup has brought.{' '}
      </p>
      <ul>
        <h2>Hobbies</h2>
        <li>Baking</li>
        <li>Gym</li>
        <li>Foodie</li>
        <li>Football</li>
        <h2>Interests</h2>
        <li>Film (Sci-fi ,Horror,Thrillers)</li>
        <li>Anime</li>
        <li>Football(FC Barcelona)</li>
      </ul>
    </div>
  );
}
