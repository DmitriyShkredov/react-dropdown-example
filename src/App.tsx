import { useState } from "react";
import { Post } from "./Post/Post";
import Dropdown from "react-dropdown";
import "./App.css";
// import "react-dropdown/style.css";

import type { Option } from "react-dropdown";

function App() {
  const options: Option[] = [
    { value: "cat1", label: "Категория 1" },
    { value: "cat2", label: "Категория 2" },
    { value: "cat3", label: "Категория 3" },
    { value: "cat4", label: "Категория 4" },
  ];
  const [state, setState] = useState(options[0]);
  return (
    <>
      <header className="header">
        <Dropdown
          options={options}
          value={state}
          onChange={(item) => setState(item)}
        />
      </header>
      <section className="content">
        <Post />
      </section>
    </>
  );
}

export default App;
