import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function useTaskContext() {
  return useContext(TaskContext);
}

//chamado pelo componente que usa o use context