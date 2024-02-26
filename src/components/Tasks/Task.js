import './Task.scss';
import { FaTrashAlt } from "react-icons/fa";

function Task(props) {
    let { id, title, description, done, } = props.task;

    const handleUpdateClick = () => {
        props.onStatusChange(id)
    }

    const handleRemoveClick = () => {
        props.onClick(id);
    }

    return (

        <div className='task-item'>
            <div className='text-container'>
                <h3>{title}</h3>
                <div>{description}</div>
          
                <div>Status: {done ? 'Done' : 'Not Done'}</div>
                <div className='id-text'>ID: {id}</div>
            </div>
            <hr></hr>
            <span className='status-container'>
                <button onClick={handleUpdateClick}>Update Status</button>
                <button onClick={handleRemoveClick}><FaTrashAlt />Remove Task</button>
            </span>
        </div>


    )

}

export default Task;