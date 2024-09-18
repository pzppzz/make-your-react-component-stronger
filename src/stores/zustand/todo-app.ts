import { create } from "zustand";
import { ITodo } from "../../types";
import { getRandomId } from "../../utils/uuid";
import { DEFAULT_TODO_LIST } from "../../constants";

interface TodoAppStore {
  todoDatabase: Map<string, ITodo>;
  todoIds: string[];

  addTodo: (name: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const DEFAULT_DATABASE: Map<string, ITodo> = new Map();

DEFAULT_TODO_LIST.forEach((todo) => {
  DEFAULT_DATABASE.set(todo.id, todo);
});

export const useTodoAppStore = create<TodoAppStore>((set, get) => ({
  todoIds: DEFAULT_TODO_LIST.map((todo) => todo.id),
  todoDatabase: DEFAULT_DATABASE,

  addTodo(name: string) {
    const { todoIds, todoDatabase } = get();
    for (const id of todoIds) {
      if (todoDatabase.get(id)?.name === name) {
        return;
      }
    }
    const newId = getRandomId();
    const newTodo = { id: newId, name, completed: false };
    todoDatabase.set(newId, newTodo);
    set({
      todoIds: [...todoIds, newId],
      todoDatabase,
    });
  },
  deleteTodo(id: string) {
    const { todoIds, todoDatabase } = get();
    if (todoDatabase.delete(id)) {
      set({
        todoIds: todoIds.filter((todoId) => todoId !== id),
        todoDatabase,
      });
    }
  },
  toggleTodo(id: string) {
    const { todoDatabase } = get();
    const todo = todoDatabase.get(id);
    if (todo) {
      set({
        todoDatabase: todoDatabase.set(id, {
          ...todo,
          completed: !todo.completed,
        }),
      });
    }
  },
}));
