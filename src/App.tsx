import "./App.css";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import { UserContext } from "./context/userContext";
import { useRef } from "react";

function App() {
  const identificationNumber = useRef<HTMLInputElement>(null);
  const PinNumber = useRef<HTMLInputElement>(null);
  return (
    <UserContext.Provider value={{ identificationNumber, PinNumber }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
