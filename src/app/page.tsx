import Card from '../components/Card/Card';
import { IAppPage } from './types/types';
import lord from '../../public/lord.png';
import planet from '../../public/planet.png';
import deathstar from '../../public/deathstar.png';
export default function App() {
  const elements: IAppPage[] = [
    {
      title: 'Postacie',
      link: '/People',
      description: 'Poznaj wybranych bohaterów ze świata Star Wars',
      imgLink: lord,
    },
    {
      title: 'Planety',
      link: '/Planets',
      description: 'Poznaj wybrane planety ze świata Star Wars',
      imgLink: planet,
    },
    {
      title: 'Statki kosmiczne',
      link: '/Starships',
      description: 'Poznaj wybrane statki kosmiczne',
      imgLink: deathstar,
    },
  ];
  const preparedElements = elements.map((el, idx) => {
    return (
      <div>
        <Card
          key={idx}
          title={el.title}
          link={el.link}
          description={el.description}
          imgLink={el.imgLink}
        />
      </div>
    );
  });
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        Poznaj uniwersum Star Wars!
      </h1>
      <div className="flex flex-row mx-0 gap-x-10">{preparedElements}</div>
    </div>
  );
}
