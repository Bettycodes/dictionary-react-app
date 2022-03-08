import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <main>
          <SearchEngine/>
        </main>
      <footer className='App-footer'><small><a href='https://github.com/Bettycodes/dictionary-react-app'>Source Code</a>{" "}Bethel Girmay</small></footer>
      </div>
    </div>
  );
}

export default App;
