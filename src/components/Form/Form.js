import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import './Form.scss';

function Form({ handleSubmit, errorMessage }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Not Done');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDesc = (e) => {
        setDescription(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const preventDefaultSubmit = (e) => {
        e.preventDefault();
        handleSubmit(title, description, status);
        setTitle('')
        setDescription('')
    }


    return (
        <form onSubmit={preventDefaultSubmit}>
            <h2>Add a new task</h2>
            {errorMessage}
            <div className="form-container">
            <h3>Title</h3>
            <input
                type="text"
                value={title}
                onChange={handleTitle}>

            </input>
            <h3>Description</h3>
            <input
                type="text"
                value={description}
                onChange={handleDesc}
                maxLength={150}>

            </input>

            <h3>Status:</h3>
            <select
                value={status}
                onChange={handleStatusChange}>
                <option value='false'>Not Done</option>
                <option value='true'>Done</option>
            </select>
            
            <button type="submit"><IoMdAddCircle />Add</button>
            </div>
        </form>
    )
}

export default Form;