import React from 'react';
import CommanderProvider from "./context/commander/CommanderProvider";
import NavBar from "./components/NavBar";
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Commands/Footer";

function App() {

  return (
      <>
          <NavBar/>
          <CommanderProvider>
              <Main/>
          </CommanderProvider>
          <Footer/>
      </>
  );
}

export default App;
