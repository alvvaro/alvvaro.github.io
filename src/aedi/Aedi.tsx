import Carrousel from '@/Carrousel';
import HeaderNav from '@/HeaderNav';

export default function Aedi() {
  return (
    <>
      <HeaderNav h1="Visual work for AEDI Sevilla" />
      <main className="mt-4 flex flex-col gap-8">
        <p>
          During my four years at <a href="https://aedisevilla.es/">AEDI</a> I
          was tasked with creating graphics for several events and activities.
          These included print, social media and web design.
        </p>

        <Carrousel>
          {imageCollection01.map((img) => (
            <img src={img} key={img} className="shadow-md" />
          ))}
        </Carrousel>

        <p>
          A year and a half after joining I was chosen to be the design lead of
          the association, and took the projects of revisiting the communication
          system and designing a new web experience.
        </p>

        <Carrousel>
          {imageCollection02.map((img) => (
            <img src={img} key={img} className="shadow-md" />
          ))}
        </Carrousel>

        <p>
          I also got to be the creative director for the sixth edition of{' '}
          <a href="https://scd.aedisevilla.es/">Sevilla Ciudad del Diseño</a>{' '}
          and a consultant for the following two. Our annual event required
          creating brands that reflected that year’s theme. Everything was done
          in‑house, from concept to touch points, including brand guidelines.
        </p>

        <Carrousel>
          {imageCollection03.map((img) => (
            <img src={img} key={img} className="shadow-md" />
          ))}
        </Carrousel>
      </main>
    </>
  );
}

const imageCollection01 = [
  '/img/aedi/aedi-cp.png',
  '/img/aedi/aedi-tm.png',
  '/img/aedi/aedi-bn.png',
  '/img/aedi/aedi-c2.png',
  '/img/aedi/aedi-er.png',
];

const imageCollection02 = [
  '/img/aedi/aedi-sm.png',
  '/img/aedi/aedi-wb.png',
  '/img/aedi/aedi-ma.png',
  '/img/aedi/aedi-br.png',
];

const imageCollection03 = [
  '/img/aedi/6scd-en.png',
  '/img/aedi/6scd-mn.png',
  '/img/aedi/6scd-gl.png',
  '/img/aedi/6scd-wb.png',
  '/img/aedi/6scd-ps.png',
];
