import { memo } from "react";
import {
  TodoItemProps as CommonTodoItemProps,
  TodoItem as CommonTodoItem,
} from "../todo-app";
import { useTodoAppStore } from "../../stores/zustand/todo-app";

interface TodoListProps extends Omit<CommonTodoItemProps, "todo"> {
  todoIds: string[];
}

interface TodoItemProps extends Omit<CommonTodoItemProps, "todo"> {
  id: string;
}

const TodoItem = memo<TodoItemProps>(({ id, onToggle, onDelete }) => {
  const todo = useTodoAppStore((s) => {
    console.log("Zustand selector");
    return s.todoDatabase.get(id)!;
  });
  return <CommonTodoItem todo={todo} onDelete={onDelete} onToggle={onToggle} />;
});

export const TodoList = memo<TodoListProps>(
  ({ todoIds, onToggle, onDelete }) => {
    console.log("TodoList rendered");
    return (
      <div>
        {todoIds.map((id) => {
          console.log("React reconciler");
          return (
            <TodoItem
              key={id}
              id={id}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    );
  }
);
