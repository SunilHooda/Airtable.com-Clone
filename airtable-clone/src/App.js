import logo from './logo.svg';
import './App.css';
import "./App.css";

import Footer from "./Components/LP_Footer";
import Navbar from "./Components/Navbar/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";
import { Home } from "./Pages/Home";
import { Container } from "@chakra-ui/react";
import Payment_Pro from './Components/Payment_Pro';


function App() {
  return (
    <div className="App">
      <Payment_Pro />
      <Navbar />
      <MainRoutes />
      <Footer />
  
      
    </div>
  );
}

export default App;
