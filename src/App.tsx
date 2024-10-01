import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authenticate from "./pages/auth/Authenticate";
import Register from "./pages/auth/Register";
import { Test } from "./pages/test/form/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
