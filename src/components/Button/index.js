import './style.css';

const Button = ({text, onClick}) => {

  return (
    <div>
      <button 
      className='btn-default' 
      onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default Button;