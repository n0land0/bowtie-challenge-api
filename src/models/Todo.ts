import { promises as fs } from 'fs';

import { dataTodosFile } from '../util/path';
import { Todo as ITodo } from './interfaces';

class Todo implements ITodo {
  description: string;
  completed: boolean;
  id?: number;
  projectId?: number;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
  }

  async create(projectId: number) {
    this.projectId = projectId;

    const allTodos = await Todo.fetchAll();

    let newId = 1;
    if (allTodos.length) {
      const { id } = allTodos[allTodos.length - 1];
      newId = id + 1;
    }
    this.id = newId;
    allTodos[allTodos.length] = this;

    console.log(allTodos.length);
    return fs.writeFile(dataTodosFile, JSON.stringify(allTodos));
  }

  static async fetchAllByProjectId(projectId: number): Promise<ITodo[]> {
    return fs
      .readFile(dataTodosFile)
      .then((data) => JSON.parse(data.toString()))
      .then((todosArray) =>
        todosArray.filter((todo: Todo) => todo.projectId === projectId)
      );
  }

  static async fetchAll(): Promise<ITodo[]> {
    return fs
      .readFile(dataTodosFile)
      .then((data) => JSON.parse(data.toString()));
  }
}

export default Todo;
