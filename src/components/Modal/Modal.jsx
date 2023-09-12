import './Modal.css';

const Modal = (props) => {

    if (props.isOpen) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content neon-blue'>
                    <div className='modal-controls'>
                        <button className="modal-close-button" onClick={props.toggleModal}> X</button>
                    </div>
                    <span className='modal-message-text'>{props.children}</span>
                </div>
            </div>

        )
    } else {
        return null;
    }

}

export default Modal;