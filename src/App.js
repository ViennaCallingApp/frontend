import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouteDetail from "./pages/RouteDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<RouteDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
