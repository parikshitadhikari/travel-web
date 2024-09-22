import { ReactNode } from "react";

/**
 * Props for the Modal component.
 * @typedef {Object} Props
 * @property {ReactNode} children - The content to be displayed inside the modal.
 * @property {boolean} isOpen - Boolean indicating whether the modal is open or not.
 * @property {() => void} onClose - Function to be called to close the modal.
 */
interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component which is a reusable UI element for displaying content in a modal dialog.
 *
 * @param {Props} props - The props for the Modal component.
 * @returns {JSX.Element|null} The Modal component if `isOpen` is true; otherwise null.
 */
const Modal = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
