import React from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardList />
    </div>
  );
}

export default App;
