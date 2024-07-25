import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import SideMenu from "./Components/SideMenu/SideMenu";
// import Card from './Components/Card';
// import profilePicture from '../src/components/House 2.png';

function App() {
  return (
    <>
      <Header/>
      <div className="flex justify-between">
        <SideMenu/>
        <Home/>
      </div>
    </>
  );
}

export default App;
