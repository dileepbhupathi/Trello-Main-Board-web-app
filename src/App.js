import './App.scss';
import { ListContainer } from './components/ListContainer/listContainer';
// import { ContentComponent } from './components/ContentComponents/Content';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ContentComponent/> */}
      <ListContainer /> 
    </div>
  );
}

export default App;
