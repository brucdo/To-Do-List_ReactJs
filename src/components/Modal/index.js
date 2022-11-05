import Button from '../Button';
import './style.css';

const Modal = ({CreateToDo, CloseModal, HandleDescription, HandleDetails}) => {
  return (
    <div className='modal'>
    <div className='close' onClick={CloseModal}>
      X
    </div>

    <h2>New Task</h2>
    <div className='input-area'>
      <label>Description: </label>
      <input className='input-text' type='text' onChange={(e)=>HandleDescription(e)}/>
    </div>

    <div className='input-area'>
      <label>Details:</label>
      <input 
      className='input-text' 
      type='text' 
      onChange={(e)=>HandleDetails(e)}
      />
    </div>
    
    <Button text='Create' onClick={CreateToDo}/>
  </div>
  )
}

export default Modal;