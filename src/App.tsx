import { MobxTodoApp } from "./components/mobx-app";
import { UseStateTodoApp } from "./components/use-state-app";
import { ZustandTodoApp } from "./components/zustand";

function App() {
  return (
    <div style={{ padding: 12 }}>
      <h1>UseState Todo App</h1>
      <UseStateTodoApp />
      <hr />
      <h1>Zustand Todo App</h1>
      <ZustandTodoApp />
      <hr />
      <h1>Mobx Todo App</h1>
      <MobxTodoApp />
    </div>
  );
}

export default App;
