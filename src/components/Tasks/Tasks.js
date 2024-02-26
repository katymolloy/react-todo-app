
import Task from './Task';
import './Task.scss';

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTask }) {


    return (
        <div className='tasks'>
            <h2>Current Tasks</h2>
            <div className='task-container'>
                {tasks.map((tasks, index) => {
                    return <Task
                        key={index}
                        task={tasks}
                        onStatusChange={onStatusChange}
                        onClick={onTaskRemove}
                    />
                })}
            </div>
            <button onClick={onClearTask}>Clear All Tasks</button>



        </div>
    )
}

export default Tasks;