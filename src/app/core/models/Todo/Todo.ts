export interface Todo {
  name: string;
  isCompleted: boolean;
}

export const createTodo = (): Todo => ({
  name: '',
  isCompleted: false
});
