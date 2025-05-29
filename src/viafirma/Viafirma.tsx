import Carrousel from '@/Carrousel';
import HeaderNav from '@/HeaderNav';

export default function Viafirma() {
  return (
    <>
      <HeaderNav h1="Design work for Viafirma" />
      <main className="mt-4 flex flex-col gap-8">
        <p>
          My work at <a href="https://www.viafirma.es/">Viafirma</a> entails
        </p>

        <Carrousel>
          {imageCollection01.map((img) =>
            typeof img === 'string' ?
              <Carrousel.Image src={img} key={img} />
            : <Carrousel.Image
                src={img.href}
                key={img.href}
                classes={img.classes}
              />,
          )}
        </Carrousel>
      </main>
    </>
  );
}

const imageCollection01 = [
  '/img/aedi/aedi-sm.png',
  { href: '/img/aedi/aedi-wb.png', classes: ['animation-scroll'] },
];
