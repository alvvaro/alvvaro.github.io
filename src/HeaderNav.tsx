import { Link } from 'wouter';

export default function HeaderNav({ h1 }: { h1: string }) {
  return (
    <header>
      <figure>
        <img src="/img/egg.jpeg" className="w-[48px] rounded-full" alt="" />
      </figure>
      <nav className="after:text-dark-grey mt-4 after:ml-1 after:text-sm after:content-['↑']">
        <Link href="/" className="!text-dark-grey">
          álvaro gs
        </Link>
      </nav>
      <h1 className="mt-4 text-2xl">{h1}</h1>
    </header>
  );
}
