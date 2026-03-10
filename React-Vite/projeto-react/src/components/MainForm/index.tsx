import { PlayCircleIcon } from 'lucide-react';
import { StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
// import { useState } from 'react';
import { useRef } from 'react'; //não renderiza novamente o componente 
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../Contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function MainForm() {
  // const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload:newTask})
  }

  function handleInterruptTask(){    
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }


  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          // value={taskName} //react agr ta controlando o componente 
          // onChange={e => setTaskName(e.target.value)}
          ref={taskNameInput}
          disabled={state.activeTask ? true : false}
  />
      </div>

      <div className='formRow'>
          <Tips/>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {state.activeTask ? 
        <DefaultButton key="Botão parar" onClick={handleInterruptTask} aria-label='Interromper tarefa atual' title='Interromper tarefa atual' color='red' type='button' icon={<StopCircleIcon />} /> 
        : <DefaultButton key="Botão iniciar" aria-label='Iniciar nova tarefa' title='Iniciar nova tarefa' type='submit' icon={<PlayCircleIcon />} />}        
      </div>
    </form>
  );
}