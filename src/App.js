import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          Dictionary
        </header>
        <Dictionary />
        <footer>
          <a href="https://github.com/elizabeth-oh/dictionary-app" target="_blank" rel="noreferrer">Coded</a> by Elizabeth Oh
        </footer>
      </div>
    </div>
  );
}

export default App;
