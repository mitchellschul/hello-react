import { useState } from 'react';
import { supabase } from './supabaseClient'
import './App.css';


function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: Books, error } = await supabase
      .from('Books')
      .select('*')
    // Update the state
    setMyBooks(Books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table className='library'>
      {
        myBooks.map(b => (
          <tr
            style={{
              textAlign: 'left', fontSize: 30

            }}
          >
            <td
              style={{ color: 'blue', padding: 20 }}>{b.title}</td>
            <td
              style={{ color: 'red', padding: 20 }}>{b.author}</td>
            <td
              style={{ color: 'black', padding: 20 }}>{b.isbn}</td>
          </tr>
        ))
      }
    </table >
  )
}

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
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Click below to go to my favorite food</h3>
      <button onClick={doMagic}>Magic {count} </button>
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
        <Library />
        {/* <TitleThingy />
        <Meals />
        <FavButton /> */}
      </header>

    </div>
  );
}

export default App;
