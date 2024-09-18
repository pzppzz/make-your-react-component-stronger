import { observer } from "mobx-react-lite";
import type { TodoAppStore } from "../../stores/mobx/todo-app";
import { TodoItem } from "../todo-app";

interface TodoListProps {
  todoAppStore: TodoAppStore;
}

const MobxTodoItem = observer(TodoItem);

export const TodoList = observer<TodoListProps>(({ todoAppStore }) => {
  return (
    <div>
      {todoAppStore.todoList.map((todo) => {
        console.log("React reconciler");
        return (
          <MobxTodoItem
            key={todo.id}
            todo={todo}
            onDelete={todoAppStore.deleteTodo}
            onToggle={todoAppStore.toggleTodo}
          />
        );
      })}
    </div>
  );
});
