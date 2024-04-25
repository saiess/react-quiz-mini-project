import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
