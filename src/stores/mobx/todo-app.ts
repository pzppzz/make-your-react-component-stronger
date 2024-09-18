import { makeAutoObservable } from "mobx";
import { ITodo } from "../../types";
import { DEFAULT_TODO_LIST } from "../../constants";
import { getRandomId } from "../../utils/uuid";

export class TodoAppStore {
  todoList: ITodo[] = [];

  constructor() {
    this.todoList = DEFAULT_TODO_LIST;
    makeAutoObservable(this);
  }

  private _findTodoById(id: string) {
    return this.todoList.find((todo) => todo.id === id);
  }

  private _findTodoByName(name: string) {
    return this.todoList.find((todo) => todo.name === name);
  }

  addTodo = (name: string) => {
    if (!this._findTodoByName(name)) {
      this.todoList.push({
        id: getRandomId(),
        name,
        completed: false,
      });
    }
  };

  deleteTodo = (id: string) => {
    if (this._findTodoById(id)) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    }
  };

  toggleTodo = (id: string) => {
    const todo = this._findTodoById(id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };
}
