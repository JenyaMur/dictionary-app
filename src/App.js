import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary defaultWord="snow"/>
    </div>
  );
}

export default App;
