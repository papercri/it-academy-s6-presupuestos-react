import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay "
      onClick={onClose} 
    >
      <div className="modal" onClick={handleModalClick} >
        <button
          className="absolute top-4 right-6 text-xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
           <FontAwesomeIcon icon={faXmark} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
