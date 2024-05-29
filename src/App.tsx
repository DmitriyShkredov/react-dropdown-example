import { useState } from "react";
import Dropdown from "react-dropdown";
import { Post } from "./Post/Post";
import "./App.css";

import type { Option } from "react-dropdown";

function App() {
  const defItem: Option = { value: "", label: "123" };
  const [state, setState] = useState(defItem);
  const options = [
    { value: "cat1", label: "Категория 1" },
    { value: "cat2", label: "Категория 2" },
    { value: "cat3", label: "Категория 3" },
    { value: "cat4", label: "Категория 4" },
  ];

  return (
    <>
      <header className="header">
        <Dropdown
          options={options}
          onChange={(item) => setState(item)}
          value={state}
          placeholder="Выбор категории"
        />
      </header>
      <section className="content">
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </>
  );
}

export default App;
