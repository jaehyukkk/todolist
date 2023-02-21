import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Content from "./component/contentform/ContentForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
