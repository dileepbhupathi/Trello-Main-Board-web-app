import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import {ProjBoardContainer} from '../src/components/ProjBoardContainer/projBoardCotainer'





function App() {
  return (
    <div className="App">

      <Navbar/>

      <ProjBoardContainer />
    </div>
  );
}

export default App;
