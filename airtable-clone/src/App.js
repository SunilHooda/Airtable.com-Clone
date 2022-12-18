import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
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
