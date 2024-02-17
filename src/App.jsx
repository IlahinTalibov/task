import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContent from "./layouts/MainContent";
import Home from "./pages/home";
import Exam from "./pages/exam";

function App() {
  return (
    <MainContent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </MainContent>
  );
}

export default App;
