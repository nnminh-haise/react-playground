import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authenticate from "./pages/auth/Authenticate";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
