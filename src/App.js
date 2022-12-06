import './App.scss';
import { ListContainer } from './components/ListContainer/listContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListContainer /> 
    </div>
  );
}

export default App;
