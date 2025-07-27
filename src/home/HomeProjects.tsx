import LinkWrapper from '@/LinkWrapper';

export default function Projects() {
  return (
    <div className="print:hidden">
      <h2 id="projects">Projects</h2>
      <table className="mt-4 w-full table-fixed">
        <tbody>
          {projects.map((item) => (
            <tr
              key={item.name}
              className="border-transparent not-last-of-type:border-b-32"
            >
              <th
                scope="row"
                className="w-[20%] border-r-32 border-transparent text-start align-top"
              >
                {item.date}
              </th>
              <td>
                <p className="text-black">{item.name}</p>
                {item.links.map((link) => (
                  <LinkWrapper
                    key={link.title}
                    href={link.href}
                    external={link.href.startsWith('https://')}
                    className="group mt-4 flex flex-row items-start gap-4 hover:no-underline"
                  >
                    <img
                      src={link.img}
                      className={'h-[66px] w-[52px] min-w-[52px] rounded-sm object-cover shadow-sm'.concat(
                        link.animation ? ` animation-${link.animation}` : '',
                      )}
                    />
                    <span className="flex flex-col">
                      <span className="font-bold group-hover:underline">
                        {link.title}
                      </span>
                      <span className="text-dark-grey">{link.text}</span>
                    </span>
                  </LinkWrapper>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const projects = [
  {
    date: '2024',
    name: 'Alternative frontend for RTVE Play',
    links: [
      {
        title: 'Carta',
        text: 'Clean and lightweight interface for RTVE Play, made with React.',
        href: 'https://carta.valtari.workers.dev',
        img: '/img/index/carta.png',
        animation: 'scroll',
      },
    ],
  },
  {
    date: '2020',
    name: 'Proposal for the #FixThatCrapp challenge',
    links: [
      {
        title: 'Renfe Website Redesign',
        text: 'Concept for a UI challenge series. A clearer and faster purchase process for the Spanish national railways.',
        href: 'https://www.figma.com/file/UleHy2BbESn6QeIpVhnmsF/Crapp-2?node-id=0%3A1',
        img: '/img/index/renfe.png',
        animation: 'scroll',
      },
    ],
  },
  {
    date: '2017 - 2020',
    name: 'Visual work for AEDI Sevilla',
    links: [
      {
        title: 'Graphics',
        text: 'A curated selection of works for AEDI, including both print and web design.',
        href: './aedi',
        img: '/img/index/aedi.png',
        animation: 'carrousel',
      },
    ],
  },
  {
    date: '2019',
    name: 'Explorations on CGI',
    links: [
      {
        title: 'Headphone 3D Modelling',
        text: 'Photorealistic texturing and rendering of the Audio-Technica ATH-M50x headphones. Made with @seaceau.',
        href: './cgi',
        img: '/img/index/m50x.png',
        animation: 'pan',
      },
    ],
  },
];
