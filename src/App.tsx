import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authenticate from "./pages/auth/Authenticate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Authenticate />} />
      </Routes>
    </Router>
  );
}

export default App;
