import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
        <Header />
        <Body />
    </LanguageProvider>
  );
}

export default App;
