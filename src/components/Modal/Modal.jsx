import './Modal.css';

const Modal = (props) => {

    if(props.isOpen){
        return(
        
            <div className='modal-overlay'>
                <div className='modal-content'>
                    {props.children}
                </div>
            </div>
        
        )
    }else{
        return null;
    }
    
}

export default Modal;