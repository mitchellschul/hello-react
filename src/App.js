import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Woo! I created a React app with <code>create-react-app</code> and deployed it to Netlify!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Mitch at MSU!
        </a>
      </header>
    </div>
  );
}

export default App;
