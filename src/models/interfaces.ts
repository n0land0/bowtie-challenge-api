export interface Project {
  id?: number;
  projectName: string;
}

export interface Todo {
  id?: number;
  projectId?: number;
  description: string;
  completed: boolean;
}
