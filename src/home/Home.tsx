import HomeAbout from './HomeAbout';
import HomeColophon from './HomeColophon';
import HomeEducation from './HomeEducation';
import HomeExperience from './HomeExperience';
import HomeHeader from './HomeHeader';
import HomeLinks from './HomeLinks';
import HomeMore from './HomeMore';
import HomeProjects from './HomeProjects';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="mt-12 flex flex-col gap-12">
        <HomeAbout />
        <HomeLinks />
        <HomeEducation />
        <HomeExperience />
        <HomeProjects />
        <HomeMore />
        <HomeColophon />
      </main>
    </>
  );
}
