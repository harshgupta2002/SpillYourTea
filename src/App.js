import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import SideMenu from "./Components/SideMenu/SideMenu";
import Card from './Components/Card';
import profilePicture from '../src/components/House 2.png';

function App() {
  return (
    <>
      <Header/>
      <div className="flex justify-between">
        <SideMenu/>
        <Home/>
    <Card
        title="Exciting Gossip!"
        snippet="Did you hear about the latest drama?"
        author="John Doe"
        likes={120}
        comments={34}
        timestamp="2 hours ago"
        profilePicture={profilePicture}
      />
      <Card
        title="Exciting Gossip!"
        snippet="Did you hear about the latest drama?"
        author="John Doe"
        likes={120}
        comments={34}
        timestamp="2 hours ago"
        profilePicture={profilePicture}
      />

       <Card
        title="Exciting Gossip!"
        snippet="Did you hear about the latest drama?"
        author="John Doe"
        likes={120}
        comments={34}
        timestamp="2 hours ago"
        profilePicture={profilePicture}
      />

        <Card
        title="Exciting Gossip!"
        snippet="Did you hear about the latest drama?"
        author="John Doe"
        likes={120}
        comments={34}
        timestamp="2 hours ago"
        profilePicture={profilePicture}
      />
      
      </div>
    </>
  );
}

export default App;
