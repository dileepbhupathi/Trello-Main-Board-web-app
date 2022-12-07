import './App.scss';
import { Demo } from './components/Demo/Demo';
import { ListContainer } from './components/ListContainer/listContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListContainer /> 
      <Demo/>
    </div>
  );
}

export default App;
