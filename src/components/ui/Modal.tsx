export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg">
          {children}
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  }
  