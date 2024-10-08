import { TodoInput } from "../todo-app";
import { useTodoAppApi, useTodoAppStore } from "../../stores/zustand/todo-app";
import { TodoList } from "./todo-list";

export const ZustandTodoApp: React.FC = () => {
  const { addTodo, deleteTodo, toggleTodo } = useTodoAppApi();
  const todoIds = useTodoAppStore((s) => s.todoIds);

  return (
    <div className="todo-app" style={{ width: 400 }}>
      <div className="todo-app-header">
        <TodoInput onAddTodo={addTodo} />
      </div>
      <div className="todo-app-main">
        <TodoList
          todoIds={todoIds}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>
    </div>
  );
};
