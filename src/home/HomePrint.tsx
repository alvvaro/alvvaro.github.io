export default function Print() {
  return (
    <section className="print:hidden">
      <button
        onClick={window.print}
        className="text-grey hover:cursor-pointer hover:underline"
      >
        Download CV ⤓
      </button>
    </section>
  );
}
