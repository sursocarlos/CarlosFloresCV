import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
    <LanguageProvider>
        <Header />
        <Body />
        <Footer />
    </LanguageProvider>
  );
}

export default App;
