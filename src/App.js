import "./App.scss";
import { ListContainer } from "./components/ListContainer/listContainer";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";



function App() {
  return (
    <div className="App">
      <PrjHeader />
      <ListContainer />
    </div>
  );
}

export default App;
