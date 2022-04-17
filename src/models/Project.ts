import { deepStrictEqual } from 'assert';
import { promises as fs } from 'fs';

import { dataProjectsFile } from '../util/path';
import { Project as IProject, Todo } from './interfaces';

// import path from 'path';

class Project implements IProject {
  id?: number | undefined;
  projectName: string;
  todos: Todo[];

  constructor(id: number | undefined, projectName: string, todos: Todo[]) {
    this.id = id;
    this.projectName = projectName;
    this.todos = todos;
  }

  static fetchAll() {
    return fs
      .readFile(dataProjectsFile)
      .then((data) => JSON.parse(data.toString()));
  }
}

export default Project;
