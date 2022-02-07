import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [greet, setGreet] = useState("");
  const [name, setName] = useState("");
  const alertt = () => {
    setGreet(
      name === "" ? "este lugar no debe estar vacio" : `¡Welcome ${name} 😍! `,
      alert("thanks for visiting me")
    );
  };
  useEffect(() => {
    setGreet(name);
  }, []);

  return (
    <div className="App">
      <h1>Hello User App</h1>
      <form className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        ></input>
        <button type="button" onClick={() => alertt()}>
          Greet Me!!
        </button>
        <p>{greet ? greet : "please enter your name"}</p>
      </form>
    </div>
  );
}

export default App;