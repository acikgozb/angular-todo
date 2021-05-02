// libraries
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';


export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

export const createTodo = (): Todo => ({
  id: uuidv4(),
  name: '',
  isCompleted: false
});
