import { useState } from "react";
import Page from "./components/Page";
import "./index.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page></Page>
    </ThemeContext.Provider>
  );
}

export default App;
