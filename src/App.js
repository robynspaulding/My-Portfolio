import "./App.css";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { UpArrow } from "./components/upArrow";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <hr />
      <Skills />      
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Portfolio />
      <UpArrow />
    </div>
  );
}

export default App;
