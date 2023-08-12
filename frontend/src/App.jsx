import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navbar";
import Papers from "./pages/papers";

function App() {
  return (
    <>
      <Navigation />
      <Papers />
    </>
  );
}

export default App;
