export interface Project {
  id?: number;
  projectName: string;
  todos?: Todo[];
}

export interface Todo {
  id?: number;
  projectId?: number;
  description: string;
  completed: boolean;
}
