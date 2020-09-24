import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import { NewsContext, NewsContextProvider } from "./NewsContext";

function App() {
  return (
    <NewsContextProvider>
      <Header />
      <div className="ml-5 mr-5">
        <News />
      </div>
    </NewsContextProvider>
  );
}

export default App;
