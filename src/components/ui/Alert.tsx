export default function Alert({ message, type }: { message: string; type: "success" | "error" }) {
    return (
      <div className={`p-4 rounded ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
        {message}
      </div>
    );
  }
  