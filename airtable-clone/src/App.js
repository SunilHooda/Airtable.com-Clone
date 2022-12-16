import logo from "./logo.svg";
import "./App.css";

import Footer from "./Components/LP_Footer";
import Navbar from "./Components/Navbar/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";
import { Home } from "./Pages/Home";
import { Container } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      
      <Container  minWidth="6xl" maxW='10xl'>
      <Navbar />
      <MainRoutes />
      <Footer />
      </Container>
      
    </div>
  );
}

export default App;
