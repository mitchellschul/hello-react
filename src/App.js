import logo from './logo.svg';
import './App.css';


const meals = [
  {
    id: 1,
    mealType: "Breakfast",
    name: "Eggs Benedict",
    ingredients: ["eggs", "butter", "bread", "ham", "cheese"],
    good: true
  },
  {
    id: 2,
    mealType: "lunch",
    name: "Ham Sandwich",
    ingredients: ["bread", "ham", "cheese"],
    good: true
  },
  {
    id: 3,
    mealType: "dinner",
    name: "Tune Melt",
    ingredients: ["bread", "tuna", "cheese"],
    good: false
  },
  {
    id: 4,
    mealType: "breakfast",
    name: "Oatmeal",
    ingredients: ["oatmeal", "milk", "sugar"],
    good: false
  }

]


function Meals() {
  const mealStats = meals.map(meals =>
    <li
      key={meals.id}
      style={{ color: meals.good ? 'green' : 'red' }}
    >
      {meals.name} is {meals.good ? 'good' : 'bad'} for {meals.mealType}
    </li>
  );
  return (
    <div>
      <ul>{mealStats}</ul>

    </div>
  )
}


function FavButton() {
  return (
    <div>
      <h3>Click below to go to my favorite food</h3>
      <button><a href='https://en.wikipedia.org/wiki/Pizza' target='_blank'>!?My Favorite?!</a></button>
    </div>

  );
}


function TitleThingy() {
  return (
    <h2>Welcome to Mitchell's Super Great Food Opinions!</h2>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleThingy />
        <Meals />
        <FavButton />
      </header>

    </div>
  );
}

export default App;
