import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import profilePicture from '../src/components/House 2.png';
import Card from './components/Card';

function App() {
  return (
    <>
      <Header/>
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
      
    </>
  );
}

export default App;
