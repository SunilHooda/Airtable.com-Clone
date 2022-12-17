import "./App.css";

import Footer from "./Components/LP_Footer";
import Navbar from "./Components/Navbar/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
