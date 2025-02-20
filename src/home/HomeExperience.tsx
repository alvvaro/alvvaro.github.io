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
                <p className="!text-black">
                  <a href={item.href}> {item.name}</a>
                </p>
                <p>{item.location}</p>
                <p>{item.text}</p>
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
    text: (
      <>
        As a <em>Design Systems Engineer</em> and UI Designer, I help developers
        at the company build consistent products, by providing them with
        standards for visual design, layout, interaction and voice.
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
