import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  function toggleTheme() {
    setIsDarkTheme((theme) => !theme);
  }
  return (
    <div className={`m-5 text-center ${isDarkTheme ? "dark" : "light"}`}>
      <h1 className={"mb-5 fw-bold"}>Theme Switcher</h1>
      <h5 className="mb-5 fw-bold">{
        isDarkTheme ? "Dark Theme" : "Light Theme"
      }</h5>
      <Button
        variant="warning"
        className="p-2 text-white fw-bold"
        onClick={toggleTheme}
      >
        Toggle Theme
      </Button>
    </div>
  );
}

export default App;

