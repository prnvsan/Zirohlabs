import logo from "./logo.svg";
import "./App.css";
import { createClient } from "webdav/web";

import { useEffect } from "react";

async function getDir() {
  console.log("im in");
  // Get directory contents
  try {
    const client = createClient("http://127.0.0.1", {
      username: "root",
      password: "root",
    });
    console.log(client);
    const directoryItems = await client.getDirectoryContents("/sites");
    console.log(directoryItems);
  } catch (error) {
    console.log("Error: " + error);
  }
}

function App() {
  useEffect(() => {
    getDir();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={getDir}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
