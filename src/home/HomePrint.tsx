export default function Print() {
  return (
    <div className="print:hidden">
      <button
        onClick={window.print}
        className="text-grey hover:cursor-pointer hover:underline"
      >
        Download CV ⤓
      </button>
    </div>
  );
}
