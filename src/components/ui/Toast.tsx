import { useState } from "react";

export default function Toast({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
      {message}
      <button onClick={() => setVisible(false)} className="ml-4">X</button>
    </div>
  );
}
