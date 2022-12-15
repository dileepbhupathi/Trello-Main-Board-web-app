import React from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";
import { ProjBoardContainer } from "./components/ProjBoardContainer/projBoardCotainer";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PrjHeader />
        <ProjBoardContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;