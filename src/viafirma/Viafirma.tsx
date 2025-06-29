import Carrousel from '@/Carrousel';
import HeaderNav from '@/HeaderNav';

export default function Viafirma() {
  return (
    <>
      <HeaderNav h1="Viafirma Showcase" />
      <main className="mt-4 flex flex-col gap-8">
        <div>
          <p>
            In an effort to improve the experience for small and non-technical
            clients,{' '}
            <a href="https://www.viafirma.com/" target="_blank">
              Viafirma
            </a>{' '}
            invested in their web frontends, bootstraping many React projects.
          </p>

          <p>
            I was tasked with owning this new web initiative in terms of both{' '}
            <em>design and engineering</em>.
          </p>
        </div>

        <Carrousel>
          {imageCollection01.map((img) => (
            <Carrousel.Image src={img} key={img} />
          ))}
        </Carrousel>

        <p>
          Design-wise, it meant reinforcing the{' '}
          <em>information architecture</em>, visual language and vocabulary. All
          the data was already there and was poorly surfaced; the job was to
          review overall page layout, section hierarchies, and component
          interactions.
        </p>

        <p>
          The engineering challenge was to deal with a fragmented stack:
          migrating functionality from backend-centered frameworks and pre-React
          JS libraries to new micro-frontends,{' '}
          <em>major refactors with modern React patterns</em>, implementing
          TypeScript, creating libraries of general-use utilities and
          components, etc.
        </p>

        <hr />

        <p>
          PS: One of the big discoveries I made while working was{' '}
          <a href="https://swr.vercel.app/" target="_blank">
            {"Vercel's"} SWR library
          </a>
          , which simplifies data-fetching logic and ensures that{' '}
          <em>data remains one-directional throughout the app tree</em>, because
          revalidations and optimistic updates are handled through a provided{' '}
          <pre className="inline">mutate</pre> function.
        </p>
      </main>
    </>
  );
}

const imageCollection01 = [
  '/img/viafirma/viafirma-hw.gif',
  '/img/viafirma/viafirma-db.png',
  '/img/viafirma/viafirma-ro.gif',
  '/img/viafirma/viafirma-pt.png',
];
