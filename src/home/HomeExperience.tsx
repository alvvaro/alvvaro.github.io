import { Fragment } from 'react';

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

                {item.roles ?
                  <ul>
                    {item.roles.map((role) => (
                      <li key={role.date} className="mt-4">
                        <p className="text-black">{role.role}</p>

                        <p>{role.text}</p>

                        {role.tags ?
                          <p className="text-grey">{role.tags.join(' · ')}</p>
                        : null}

                        {role.links?.map((link) => (
                          <LinkWrapper
                            key={link.title}
                            href={link.href}
                            external={link.href.startsWith('https://')}
                            className="group my-4 flex flex-row items-start gap-4 hover:no-underline print:hidden"
                          >
                            <img
                              src={link.img}
                              className={'h-[66px] w-[52px] min-w-[52px] rounded-sm object-cover shadow-sm'.concat(
                                link.animation ?
                                  ` animation-${link.animation}`
                                : '',
                              )}
                            />
                            <span className="flex flex-col">
                              <span className="font-bold group-hover:underline">
                                {link.title}
                              </span>
                              <span className="text-dark-grey">
                                {link.text}
                              </span>
                            </span>
                          </LinkWrapper>
                        ))}
                      </li>
                    ))}
                  </ul>
                : null}
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
    role: 'Main React Engineer',
    href: 'https://www.viafirma.com/',
    sector: 'eSignature solutions',
    location: 'Seville, ES',
    roles: [
      {
        date: '2024 - Now',
        role: 'Main React Engineer',
        text: (
          <>
            Architecting, developing, and designing several micro-frontends.
            Accomplished milestones such as migrating legacy apps from CRA to
            Vite, <em>adopting TypeScript</em> and harmonizing their design
            through a common library of components.
          </>
        ),
        tags: ['React', 'TypeScript', 'Vite', 'Redux', 'SWR', 'MUI'],
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
      {
        date: '2023 - 2024',
        role: 'UI Developer',
        text: (
          <>
            Worked on theming engines, page layout, semantic markup, component
            interactions.
          </>
        ),
        tags: ['React', 'Semantic UI', 'MUI'],
      },
      {
        date: '2022 - 2023',
        role: 'UI/UX Designer',
        text: <>Proposed a UI design system for the company.</>,
        tags: ['Figma', 'Zeplin'],
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
