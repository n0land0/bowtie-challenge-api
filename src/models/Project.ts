import { promises as fs } from 'fs';

import { dataProjectsFile } from '../util/path';
import { Project as IProject, Todo } from './interfaces';

// import path from 'path';

class Project implements IProject {
  projectName: string;
  id?: number | undefined;
  todos?: Todo[];

  constructor(projectName: string) {
    this.projectName = projectName;
  }

  async save() {
    // const projectData = await Project.fetchAll();
    const projectData = await fs
      .readFile(dataProjectsFile)
      .then((data) => JSON.parse(data.toString()));
    const newId = projectData.length;
    this.id = newId;
    this.todos = [];
    projectData[newId] = this;
    return await fs.writeFile(dataProjectsFile, JSON.stringify(projectData));
  }

  static fetchAll(): Promise<IProject[]> {
    return fs
      .readFile(dataProjectsFile)
      .then((data) => JSON.parse(data.toString()));
  }
}

export default Project;
