import './App.css';
import NoteBookComponent from './components/NoteBookComponent';
import SearchComponent from './components/SearchComponent.js'

function App() {
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="rowC App-header">
            <NoteBookComponent />
            <SearchComponent />       
    </div>
  );
}

export default App;
