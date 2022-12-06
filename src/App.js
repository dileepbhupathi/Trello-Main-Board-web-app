import './App.scss';
import { ListContainer } from './components/ListContainer/listContainer';
import { Navbar } from './components/Navbar/Navbar';
import {ScriptDB} from './script'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListContainer /> 
      <ScriptDB/>
    </div>
  );
}

export default App;
