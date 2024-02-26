import Tasks from './components/Tasks/Tasks'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { useState } from 'react';
import uuid from 'react-uuid';


function App() {
  const [message, setMessage] = useState('');
  const [tasks, setTasks] = useState([{
    id: uuid(),
    title: 'Walk the dog',
    description: 'Take Sparky out at 5pm',
    done: false,

  },
  {
    id: uuid(),
    title: 'Finish homework',
    description: 'Javascript and Mobile Development',
    done: false,

  },
  {
    id: uuid(),
    title: 'Grocery shopping',
    description: 'Student discount at Food Basics',
    done: true,

  }]);

  const handleClearTasks = () => {
    setTasks([]);
  }

  function handleRemoveTask(id) {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  }

  function handleStatusChange(id) {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  }

  const handleAddTask = (title, description, status) => {
    if (description !== '' && title !== '') {
      const updatedTasks = [...tasks];
      updatedTasks.push({ id: uuid(), title: title, description: description, done: status })
      setTasks(updatedTasks);
      setMessage('')
    } else {
      setMessage('Missing required fields.')
    }

  }



  return (
    <div className="App">

      <Header />
      <div className='container'>
        {/* <div className='taskContainer'> */}
          <Tasks
            tasks={tasks}
            onStatusChange={handleStatusChange}
            onTaskRemove={handleRemoveTask}
            onClearTask={handleClearTasks} />
        {/* </div> */}
        <Form handleSubmit={handleAddTask}
          errorMessage={message} />
      </div>
    </div>
  );
}

export default App;
