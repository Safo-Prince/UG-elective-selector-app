import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import About from "./components/About";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <About />
      <HomeScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
