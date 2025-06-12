import Carrousel from '@/Carrousel';
import HeaderNav from '@/HeaderNav';

export default function Viafirma() {
  return (
    <>
      <HeaderNav h1="Design work for Viafirma" />
      <main className="mt-4 flex flex-col gap-8">
        <p>WIP</p>

        <Carrousel>
          {imageCollection01.map((img) => (
            <Carrousel.Image src={img} key={img} />
          ))}
        </Carrousel>
      </main>
    </>
  );
}

const imageCollection01 = [
  '/img/viafirma/viafirma-hw.gif',
  '/img/viafirma/viafirma-os.png',
];
