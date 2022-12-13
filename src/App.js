<<<<<<< HEAD
import './App.scss';
import { Demo } from './components/Demo/Demo';
import { ListContainer } from './components/ListContainer/listContainer';
import { Navbar } from './components/Navbar/Navbar';
import "./App.scss";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


=======
import React from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import { IndexDB } from "./components/IndexedDB/IndexedDB";
import { PrjHeader } from "./components/PrjHeaderComponent/PrjHeader";
import { ProjBoardContainer } from "./components/ProjBoardContainer/projBoardCotainer";
>>>>>>> 94182adf89eea90f17fd005aca5cbeb194ab2ae0

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
<<<<<<< HEAD
        <Navbar/>
        <ListContainer /> 
        <Demo/>
=======
        <PrjHeader />
        <ProjBoardContainer />
        {/* <IndexDB/> */}
>>>>>>> 94182adf89eea90f17fd005aca5cbeb194ab2ae0
      </ErrorBoundary>
    </div>
  );
}

export default App;
