export default function About() {
  return (
    <div>
      <h2 id="About">About</h2>
      <p className="mt-4">
        I’m a designer and front-end developer with an interest on
        human-computer interaction, user experience and product engineering.
      </p>
      <p>
        Currently <a href="#experience">Main React Engineer at Viafirma</a>, a
        cloud-based electronic signature and digital identity management suite.
      </p>
      <div className="hidden print:block">
        <p className="mt-4">
          ¶ Get the live, full version of this document over on{' '}
          <a href="https://alvaro.gs/">my website</a>.
        </p>
      </div>
    </div>
  );
}
