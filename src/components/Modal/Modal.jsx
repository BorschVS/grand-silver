const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
            x
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;