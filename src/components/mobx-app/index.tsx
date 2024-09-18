import { observer } from "mobx-react-lite";
import { TodoInput } from "../todo-app";
import { TodoAppStore } from "../../stores/mobx/todo-app";
import { TodoList } from "./todo-list";

const todoAppStore = new TodoAppStore();

export const MobxTodoApp = observer(() => {
  return (
    <div className="todo-app" style={{ width: 400 }}>
      <div className="todo-app-header">
        <TodoInput onAddTodo={todoAppStore.addTodo} />
      </div>
      <div className="todo-app-main">
        <TodoList todoAppStore={todoAppStore} />
      </div>
    </div>
  );
});
