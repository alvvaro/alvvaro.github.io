import Carrousel from '@/Carrousel';
import HeaderNav from '@/HeaderNav';

export default function Cgi() {
  return (
    <>
      <HeaderNav h1="Explorations on CGI" />
      <main className="mt-4 flex flex-col gap-8">
        <div>
          <p>
            <a href="https://instagram.com/seaceau">@seaceau</a> and I decided
            to recreate the Audio-Technica ATH-M50x headphones digitally and to
            make some marketing resources from scratch.
          </p>
          <p>
            Solid modelling, lighting setup and rendering were made in
            Rhinoceros + V-Ray. Bespoke materials were created using Substance
            Designer, and mesh development and texture placement were done in
            Blender. Color correction with Lightroom.
          </p>
        </div>

        <Carrousel>
          {imageCollection.map((img) => (
            <img src={img} key={img} className="shadow-md" />
          ))}
        </Carrousel>
      </main>
    </>
  );
}

const imageCollection = [
  '/img/cgi/1.png',
  '/img/cgi/2.png',
  '/img/cgi/3.png',
  '/img/cgi/4.png',
  '/img/cgi/5.png',
];
