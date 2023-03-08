import ReactDOM from 'react-dom'
import { useEffect } from 'react'
interface Modal {
    onClose: () => void;
    children: React.ReactNode;
}
const Modal = ({onClose,children,}: Modal) => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, []);
  return ReactDOM.createPortal(
    <div>
    <div onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"></div>
    <div className='fixed inset-40 p-10 bg-card'>
        <div className='flex flex-col justify-between h-full'>
            {children}
        </div>
    </div>
    </div>,
    document.querySelector('.modal-container') as HTMLElement
  )
}

export default Modal