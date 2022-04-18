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
      if (id) newId = id + 1;
    }
    this.id = newId;
    allTodos[allTodos.length] = this;

    console.log(allTodos.length);
    return fs.writeFile(dataTodosFile, JSON.stringify(allTodos));
  }

  static async update(
    id: number,
    projectId: number,
    updatedDescription: string,
    updatedCompleted: boolean
  ) {
    const todosData = await Todo.fetchAll();

    const todoIndex = todosData.findIndex((todo) => todo.id === id);

    todosData[todoIndex] = {
      id,
      projectId,
      description: updatedDescription,
      completed: updatedCompleted,
    };

    return fs.writeFile(dataTodosFile, JSON.stringify(todosData));
  }

  static async delete(id: number) {
    const todosData = await Todo.fetchAll();
    const todoIndex = todosData.findIndex((todo) => todo.id === id);

    todosData.splice(todoIndex, 1);

    return fs.writeFile(dataTodosFile, JSON.stringify(todosData));
  }

  static async deleteAllByProjectId(projectId: number) {
    const todosData = await Todo.fetchAll();
    const filteredTodosData = todosData.filter(
      (todo) => todo.projectId !== projectId
    );

    return fs.writeFile(dataTodosFile, JSON.stringify(filteredTodosData));
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
