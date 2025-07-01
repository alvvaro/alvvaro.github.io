export default function Colophon() {
  return (
    <>
      <div className="print:hidden">
        <h2 id="colophon">Colophon</h2>
        <p className="mt-4">
          Handcrafted with React and Tailwind. Check out the{' '}
          <a href="https://github.com/alvvaro/alvvaro.github.io">source code</a>
          .
        </p>
        <p>
          Inspired by <a href="https://read.cv/">read.cv</a>.
        </p>
        <q className="mt-2 block">
          Designer is that who understands that everything has been designed.
        </q>
      </div>
      <div className="hidden print:block">
        <p className="mt-4">
          PDF generated from my <a href="https://alvaro.gs">website</a>
        </p>
      </div>
    </>
  );
}
