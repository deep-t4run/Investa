import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import BankLogin from "./Components/BankLogin";
import SignIn from "./Components/SignIn";
import Services from "./Components/Services";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bank-login" element={<BankLogin />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      {/* <SignIn></SignIn> */}
    </>
  );
}

export default App;
