
import './style.css';

const ToDoArea = ({toDoList, handleIsDone, handleRemoveToDo}) => {

  return (
      <div className='todo-area'>
      {toDoList.map((toDo, index) => (
        <div className= {`todo-card ${toDo.done?'done':''}`} key={index}>
          <div >
            {toDo.description} 
            <p className='details'>
              {toDo.details}
            </p>
          </div>
          {toDo.done}
          <div className='btn-area'>

            <button 
            className='btn-done' 
            onClick={() => handleIsDone(toDo.id)}
            >Done</button>

            <button 
            className='btn-del' 
            onClick={() => { handleRemoveToDo(toDo.id)
            }}>Delete</button>
          
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToDoArea;