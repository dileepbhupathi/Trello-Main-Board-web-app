import React from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { IndexDB } from "./components/IndexedDB/IndexedDB";
import { ListContainer } from "./components/ListContainer/listContainer";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PrjHeader />
        <ListContainer />
        <IndexDB/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
