import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".logo", {
        delay: 0.3,
        y: -400,
        rotate: 360,
        duration: 1.5,
        scale: 0,
        opacity: 0,
      })
      .from("h1", {
        scale: 0,
        duration: 0.5,
      })
      .to("h1", {
        color: "red",
        duration: 0.4,
      });
  });

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
