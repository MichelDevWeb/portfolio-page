import "./App.css";
import PortfolioContainer from "./modules/portfolio-1/PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Portfolio_2 from "./modules/portfolio-2/views/Portfolio_2";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <PortfolioContainer /> */}
      <Portfolio_2 />
    </div>
  );
}

export default App;
