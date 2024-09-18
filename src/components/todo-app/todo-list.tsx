import { memo } from "react";
import { ITodo } from "../../types";
import { MemoedTodoItem, TodoItemProps } from "./todo-item";

export interface TodoListProps extends Omit<TodoItemProps, "todo"> {
  todoList: ITodo[];
}

export const TodoList = memo<TodoListProps>(
  ({ todoList, onDelete, onToggle }) => {
    console.log("TodoList rendered");
    return (
      <div>
        {todoList.map((todo) => {
          console.log("React reconciler");
          return (
            <MemoedTodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    );
  }
);
