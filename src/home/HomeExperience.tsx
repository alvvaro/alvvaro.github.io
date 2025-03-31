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
                  <a href={item.href} className="!text-black">
                    {item.name}
                  </a>
                  {' – '}
                  <span>{item.location}</span>
                </p>

                <p>{item.text}</p>

                {item.tags ?
                  <p className="opacity-75">{item.tags.join(' · ')}</p>
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
    name: 'Viafirma',
    location: 'Seville, Spain',
    tags: ['React', 'TypeScript', 'Redux', 'Vite', 'SWR'],
    text: (
      <>
        Began as a UI Designer, but quickly transtioned to a developer role.
        Currently holding a <em>Lead React Engineer</em> position that entails
        architecting, developing, and designing several micro-frontends.
        Accomplished milestones such as migrating legacy apps from CRA to Vite,
        implementing <em>TypeScript</em> and harmonizing their design through a
        common library of components.
      </>
    ),
    href: 'https://www.viafirma.com/',
  },
  {
    date: '2017 - 2020',
    name: 'AEDI Sevilla (volunteer work)',
    location: 'Seville, Spain',
    text: (
      <>
        Codirector at AEDI, a non-profit student organization focused on sharing
        design knowledge. There I was put in charge of the <em>design team</em>;
        and also organized, among amazing colleagues, three editions of our{' '}
        <a href="https://scd.aedisevilla.es/">design conference</a>.
      </>
    ),
    href: 'https://www.aedisevilla.es/',
  },
];
