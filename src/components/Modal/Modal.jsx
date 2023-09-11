import './Modal.css';

const Modal = (props) => {

    if (props.isOpen) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content neon-blue'>
                    <div className='modal-controls'>
                        <button className="modal-close-button neon-blue" onClick={props.toggleModal}> X</button>
                    </div>
                    {props.children}
                </div>
            </div>

        )
    } else {
        return null;
    }

}

export default Modal;