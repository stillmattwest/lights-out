import './Modal.css';

import { useGameContext } from '../../context/GameContext';

const Modal = (props) => {

    const { showModal, setShowModal, modalMessage } = useGameContext();

    if (showModal) {
        return (

            <div className='modal-overlay'>
                <div className='modal-content neon-blue'>
                    <div className='modal-controls'>
                        <button className="modal-close-button" onClick={() => setShowModal(false)}> X</button>
                    </div>
                    <span className='modal-message-text'>{modalMessage}</span>
                </div>
            </div>

        )
    } else {
        return null;
    }

}

export default Modal;