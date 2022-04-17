import { deepStrictEqual } from 'assert';
import fs from 'fs';

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
    fs.readFile(dataProjectsFile, (error, data) => {
      return JSON.parse(data.toString());
    });
  }
}

export default Project;
