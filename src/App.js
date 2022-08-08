import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';
import Footer from './Footer';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary defaultWord="love"/>
      <Footer />
    </div>
  );
}

export default App;
