import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";
import Square from "./components/square/Square";
import Reveal from "./components/Reveal/Reveal";
import { reavealContent } from "./components/Reveal/reveal.content";

function App() {
  return (
    <div className="app">
      {/* Simple Animation */}
      {/* <Square />  */}
      {/* Intermediate Animation */}
      {/* <Hamburger /> */}
      {/* Ease content on scroll */}
      <div className="reveal-content">
      <Reveal>
        <h1>{reavealContent.p1}</h1>
      </Reveal>
      <Reveal>
        <h1>{reavealContent.p2}</h1>
      </Reveal>
      <Reveal>
        <h1>{reavealContent.p3}</h1>
      </Reveal>
      </div>
    </div>
  );
}

export default App;
