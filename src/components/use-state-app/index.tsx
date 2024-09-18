import { useCallback, useRef } from "react";
import { ITodo } from "../../types";
import { DEFAULT_TODO_LIST } from "../../constants";
import { getRandomId } from "../../utils/uuid";
import { TodoInput, TodoList } from "../todo-app";
import { useForceUpdate } from "../../hooks/useForceUpdate";

export const UseStateTodoApp: React.FC = () => {
  const forceUpdate = useForceUpdate();
  const todoListRef = useRef<ITodo[]>(DEFAULT_TODO_LIST);

  const findTodoById = (id: string) => {
    return todoListRef.current.find((todo) => todo.id === id);
  };

  const findTodoByName = (name: string) => {
    return todoListRef.current.find((todo) => todo.name === name);
  };

  const handleAddTodo = useCallback((name: string) => {
    if (!findTodoByName(name)) {
      const newTodo: ITodo = {
        id: getRandomId(),
        name,
        completed: false,
      };
      todoListRef.current = [...todoListRef.current, newTodo];
      forceUpdate();
    }
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    if (findTodoById(id)) {
      todoListRef.current = todoListRef.current.filter(
        (todo) => todo.id !== id
      );
      forceUpdate();
    }
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    if (findTodoById(id)) {
      todoListRef.current = todoListRef.current.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      forceUpdate();
    }
  }, []);

  return (
    <div className="todo-app" style={{ width: 400 }}>
      <div className="todo-app-header">
        <TodoInput onAddTodo={handleAddTodo} />
      </div>
      <div className="todo-app-main">
        <TodoList
          todoList={todoListRef.current}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </div>
    </div>
  );
};
