import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Importing the user data

function App() {
  const { name, city, color, bio, links } = user; // Destructuring user data

  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} links={links} /> // Passing bio and links to About
    </div>
  );
}

export default App;


