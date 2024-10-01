import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Test } from "./pages/test/form/Test";
import { AuthenticationForm } from "./pages/auth/Authenticate";
import { RegistrationForm } from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<AuthenticationForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
