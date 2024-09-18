import { memo } from "react";
import { ITodo } from "../../types";

export interface TodoItemProps {
  todo: ITodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  console.log("TodoItem rendered");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 8px",
        columnGap: 12,
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ marginLeft: 12 }}>
          {todo.completed ? <del>{todo.name}</del> : todo.name}
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export const MemoedTodoItem = memo(TodoItem);
