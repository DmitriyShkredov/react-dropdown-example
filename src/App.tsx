import { useState } from "react";
import { Post } from "./Post/Post";
import Dropdown from "react-dropdown";
import type { Option, Group } from "react-dropdown";
import "./App.css";

function App() {
  const defItem: Option = { value: "", label: "Выбор категории" };
  const [state, setState] = useState(defItem);
  const options: Group[] = [
    {
      type: "group",
      name: "group1",
      items: [
        { value: "cat1", label: "Категория 1" },
        {
          value: "cat2",
          label: "Категория 2",
          className: "Dropdown-option-two",
        },
      ],
    },
    {
      type: "group",
      name: "group2",
      items: [
        { value: "cat3", label: "Категория 3" },
        { value: "cat4", label: "Категория 4" },
      ],
    },
  ];

  return (
    <>
      <header className="header">
        <Dropdown
          options={options}
          placeholder="Выбор категории"
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
