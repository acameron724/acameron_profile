import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <h2>
          Hello and welcome to my website
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Resume />
      </header>
    </div>
  );
}

export default App;
