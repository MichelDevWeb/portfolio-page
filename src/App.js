import "./App.css";
import PortfolioContainer from "./modules/portfolio-1/PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Portfolio_2 from "./modules/portfolio-2/views/Portfolio_2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio-page" element={<Portfolio_2 />} />
          <Route
            path="/portfolio-page/portfolio_1"
            element={<PortfolioContainer />}
          />
          <Route path="/portfolio-page/portfolio_2" element={<Portfolio_2 />} />
          <Route path="*" element={<Navigate replace to="/portfolio-page" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
