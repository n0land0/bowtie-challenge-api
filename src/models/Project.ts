import { promises as fs } from 'fs';

import { dataProjectsFile } from '../util/path';
import { Project as IProject, Todo } from './interfaces';

class Project implements IProject {
  projectName: string;
  id?: number | undefined;
  todos?: Todo[];

  constructor(projectName: string) {
    this.projectName = projectName;
  }

  async create() {
    const projectData = await Project.fetchAll();

    let newId = 1;
    if (projectData.length) {
      const { id } = projectData[projectData.length - 1];
      newId = id + 1;
    }
    this.id = newId;
    this.todos = [];
    projectData[projectData.length] = this;

    return fs.writeFile(dataProjectsFile, JSON.stringify(projectData));
  }

  static async update(
    id: number,
    updatedProjectName: string,
    updatedTodos: Todo[]
  ) {
    const projectData = await Project.fetchAll();

    const projectIndex = projectData.findIndex((project) => project.id === id);

    projectData[projectIndex] = {
      id,
      projectName: updatedProjectName,
      todos: updatedTodos,
    };

    return fs.writeFile(dataProjectsFile, JSON.stringify(projectData));
  }

  static async delete(id: number) {
    const projectData = await Project.fetchAll();
    const projectIndex = projectData.findIndex((project) => project.id === id);

    projectData.splice(projectIndex, 1);

    return fs.writeFile(dataProjectsFile, JSON.stringify(projectData));
  }

  static async fetchAll(): Promise<IProject[]> {
    return fs
      .readFile(dataProjectsFile)
      .then((data) => JSON.parse(data.toString()));
  }
}

export default Project;
