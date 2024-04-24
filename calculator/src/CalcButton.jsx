export function CalcButton({ onClick, value }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-300 hover:bg-blue-400 rounded-md w-10 h-10 m-1"
    >
      {value}
    </button>
  );
}
