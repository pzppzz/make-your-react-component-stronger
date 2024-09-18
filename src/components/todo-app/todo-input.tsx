import { memo, useState } from "react";

export interface TodoInputProps {
  onAddTodo: (name: string) => void;
}

export const TodoInput = memo<TodoInputProps>(({ onAddTodo }) => {
  console.log("TodoInput rendered");
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.trim());
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (name) {
        onAddTodo(name);
        setName("");
      }
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        style={{ width: "100%", marginBottom: 4 }}
        placeholder="Enter new todo"
      />
    </div>
  );
});
