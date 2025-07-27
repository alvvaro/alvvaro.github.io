import LinkWrapper from '@/LinkWrapper';

export default function Experience() {
  return (
    <div>
      <h2 id="experience">Experience</h2>
      <table className="mt-4 w-full table-fixed">
        <tbody>
          {experience.map((item) => (
            <tr
              key={item.date}
              className="border-transparent not-last-of-type:border-b-32"
            >
              <th
                scope="row"
                className="w-[20%] border-r-32 border-transparent text-start align-top"
              >
                {item.date}
              </th>
              <td>
                <p>
                  <a href={item.href}>{item.company}</a>
                  {' – '}
                  <span>{item.sector}</span>
                  {' – '}
                  <span>{item.location}</span>
                </p>

                <p>{item.text}</p>

                {item.tags ?
                  <p className="text-grey">{item.tags.join(' · ')}</p>
                : null}

                {item.links?.map((link) => (
                  <LinkWrapper
                    key={link.title}
                    href={link.href}
                    external={link.href.startsWith('https://')}
                    className="group mt-4 flex flex-row items-start gap-4 hover:no-underline print:hidden"
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

const experience = [
  {
    date: '2022 - Now',
    company: 'Viafirma',
    href: 'https://www.viafirma.com/',
    sector: 'eSignature solutions',
    location: 'Seville, ES',
    tags: ['React', 'TypeScript', 'Vite', 'Redux', 'SWR', 'MUI'],
    text: (
      <>
        Began as a UI Designer, but quickly transtioned to a developer role.
        Currently holding a <em>Main React Engineer</em> position that entails
        architecting, developing, and designing several micro-frontends.
        Accomplished milestones such as migrating legacy apps from CRA to Vite,
        implementing <em>TypeScript</em> and harmonizing their design through a
        common library of components.
      </>
    ),
    links: [
      {
        title: 'Showcase',
        text: 'Building a new web-based experience for Viafirma',
        href: './viafirma',
        img: '/img/viafirma/viafirma-hw.gif',
        animation: undefined,
      },
    ],
  },
  // {
  //   date: '2017 - 2020',
  //   name: 'AEDI Sevilla (volunteer work)',
  //   location: 'Seville, Spain',
  //   text: (
  //     <>
  //       Codirector at AEDI, a non-profit student organization focused on sharing
  //       design knowledge. There I was put in charge of the <em>design team</em>;
  //       and also organized, among amazing colleagues, three editions of our{' '}
  //       <a href="https://scd.aedisevilla.es/">design conference</a>.
  //     </>
  //   ),
  //   href: 'https://www.aedisevilla.es/',
  // },
];
