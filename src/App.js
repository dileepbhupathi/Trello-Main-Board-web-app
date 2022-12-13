import './App.scss';
import { Demo } from './components/Demo/Demo';
import { ListContainer } from './components/ListContainer/listContainer';
import { Navbar } from './components/Navbar/Navbar';
import "./App.scss";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';



function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar/>
        <ListContainer /> 
        <Demo/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
