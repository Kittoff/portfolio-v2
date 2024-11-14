const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-bl-[30px] rounded-br-[80px] rounded-tl-[80px] rounded-tr-[30px] bg-white p-16">
        {children}
        <button
          onClick={onClose}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
