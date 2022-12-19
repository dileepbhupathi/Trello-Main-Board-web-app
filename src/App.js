import React from "react";
import "./App.scss";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import { IndexDB } from "./components/IndexedDB/IndexedDB";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";
import { ProjBoardContainer } from "./components/ProjBoardContainer/projBoardCotainer";
// import { TrelloContext } from "./components/TrelloContext/TrelloContext";

function App() {
  // useEffect(() => {
  //   const IndexedDBData = indexedDB.open("InitialData", 2);

  //   IndexedDBData.onsuccess = () => {
  //     const db = IndexedDBData.result;
  //     const updatedIndexedDBData = db
  //       .transaction(["lists"], "readwrite")
  //       .objectStore("lists")
  //       .getAll();

  //     updatedIndexedDBData.onsuccess = (event) => {
  //       const FinalOtput = event.target.result;
  //       console.log("final data", FinalOtput);

  //       // CompleteIndexedDBData = FinalOtput
  //       // console.log('CompleteIndexedDBData',CompleteIndexedDBData)
  //     };
  //   };
  // },[]);

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
