import { ITodo } from "../types";
import { getRandomId } from "../utils/uuid";

export const DEFAULT_TODO_LIST: ITodo[] = [
  {
    id: getRandomId(),
    name: "Eating",
    completed: true,
  },
  {
    id: getRandomId(),
    name: "Sleeping",
    completed: true,
  },
  {
    id: getRandomId(),
    name: "Learning",
    completed: false,
  },
];
