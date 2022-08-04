import logo from './logo.png';
import './App.css';
import DictionaryForm from './DictionaryForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DictionaryForm />
    </div>
  );
}

export default App;
