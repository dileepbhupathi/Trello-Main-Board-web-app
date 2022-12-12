import React from "react";
import "./App.scss";
// import { ListContainer } from "./components/ListContainer/listContainer";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";
import { ProjBoardContainer } from "./components/ProjBoardContainer/projBoardCotainer";



function App() {
  return (
    <div className="App">
      <PrjHeader />
      <ProjBoardContainer />
    </div>
  );
}

export default App;
