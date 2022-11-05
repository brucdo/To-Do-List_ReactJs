import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

import { toDoListData } from '../../data';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ToDoArea from '../../components/ToDoArea';

import './style.css';

const Home = () => {
  const [toDoList, setToDoList] = useState(toDoListData)
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');

  const OpenModal = () => {
    setIsOpen(true);
    console.log(isOpen);
  }

  const CloseModal = () => {
    setIsOpen(false);
    console.log(isOpen);
  }
  
  const CreateToDo = () => {
    setToDoList(currentTasks => 
      [...currentTasks, {id: uuidv4(), description:description, details:details, done: false}]);
    setDescription('');
    setDetails('');
    setIsOpen(false);
  }

  const CreateDescription = (e) =>{
    setDescription(e.target.value)
  }

  const CreateDetails = (e) =>{
    if(e.target.value==='') return null;
    setDetails(e.target.value);
  }

  const handleRemoveToDo = (id) => { 
    setToDoList(currentToDoList => currentToDoList.filter((ToDo) => id !== ToDo.id))
  }

  const handleIsDone = (id) => {
    const newToDoList = toDoList.map(toDo => {
        if(toDo.id === id) {
          toDo.done = true;
          console.log(toDo.done);
          return toDo;
        }
        return toDo;
      }
    )
    setToDoList(newToDoList);
  }

  return (
    <div className='container'>
      <div className={`container-modal ${isOpen ? 'open': ''}`} > 

        <div className='body' >
          <div className='button-area'>
            <Button text='+ Create' onClick={OpenModal} />
          </div>

          <h1>To Do List</h1>


          <ToDoArea 
          toDoList={toDoList}
          handleIsDone={handleIsDone}
          handleRemoveToDo={handleRemoveToDo}
          />
        </div>
      </div>
      
      {isOpen && (
        <Modal 
        CloseModal={CloseModal}
        CreateToDo={CreateToDo}
        HandleDescription={CreateDescription}
        HandleDetails={CreateDetails}
        />
      )}
    </div>
  )
}

export default Home;

// Buscar styled-components
// Firebase 