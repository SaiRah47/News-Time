import React from "react";
import "./App.css";
import Header from "./components/Header";
import { NewsContextProvider } from "./NewsContext";

function App() {
  return (
    <NewsContextProvider>
      <Header />
    </NewsContextProvider>
  );
}

export default App;
