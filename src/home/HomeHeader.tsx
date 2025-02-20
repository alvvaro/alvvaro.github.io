export default function Header() {
  return (
    <header className="flex items-center gap-8">
      <figure className="relative">
        <img
          src="/img/avatar.png"
          className="w-[96px] rounded-full"
          alt="My picture!"
          title="Despite everything, it's still me."
        />
        <figcaption className="absolute right-0 bottom-0 w-10 rounded-full bg-white p-0.5 text-center shadow-sm">
          👋
        </figcaption>
      </figure>
      <div>
        <h1 className="text-yellow text-2xl font-bold">álvaro gs</h1>
        <p className="">Seville — él/he</p>
      </div>
    </header>
  );
}
