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
import { formatSecondToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  // const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // Calcular o próximo formattedSecondsRemaining
  const nextDurationInMinutes = state.config[nextCycleType];
  const nextSecondsRemaining = nextDurationInMinutes * 60;
  const nextFormattedSecondsRemaining = formatSecondToMinutes(nextSecondsRemaining);

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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask(){    
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return {...task, interruptDate: Date.now()};
          }

          return task;
        })
      };
    });
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
        <p>Próximo intervalo é de {nextFormattedSecondsRemaining}.</p>
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