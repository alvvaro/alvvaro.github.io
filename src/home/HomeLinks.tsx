export default function Links() {
  return (
    <div>
      <h2 id="links">Links</h2>
      <table className="mt-4 w-full table-fixed">
        <tbody>
          {links.map((link) => (
            <tr
              key={link.label}
              className="border-transparent not-last-of-type:border-b-16"
            >
              <th
                scope="row"
                className="w-[20%] border-r-32 border-transparent text-start"
              >
                {link.label}
              </th>
              <td className="after:ml-1 after:text-sm after:content-['↗']">
                <a href={link.href}>{link.value}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const links = [
  {
    label: 'Email',
    value: 'hey@alvaro.gs',
    href: 'mailto:hey@alvaro.gs',
  },
  {
    label: 'Phone',
    value: '+34 656 383 565',
    href: 'tel:+34656383565',
  },
  {
    label: 'Networking',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alvvaro/',
  },
  {
    label: 'GitHub',
    value: '@alvvaro',
    href: 'https://github.com/alvvaro/',
  },
  {
    label: 'Brother',
    value: 'Pablo',
    href: 'https://pablo.gs/',
  },
];
