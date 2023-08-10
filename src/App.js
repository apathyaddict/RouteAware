import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LandingPage from "./components/LandingPage";
import { useMediaQuery } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage {...{ isMobile }} />} />
          <Route path="/home" element={<MainPage {...{ isMobile }} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
