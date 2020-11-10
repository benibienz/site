import React from "react";
import TodoListA from "./7a";
import TodoListB from "./7b";

const App = () => (
  <>
    <div style={{ display: "flex" }}>
      <TodoListA />
      <TodoListB />
    </div>
    <p style={{ padding: "2em" }}>
      Go to{" "}
      <a
        href="https://github.com/benibienz/site"
        target="_blank"
        rel="noreferrer"
      >
        the repo
      </a>{" "}
      to see the mockup and discussion
    </p>
  </>
);

export default App;
