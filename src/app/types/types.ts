import { StaticImageData } from 'next/image';

interface IAppPage {
  key?: number;
  title: string;
  link: string;
  description: string;
  imgLink: StaticImageData;
}

interface IPeople {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}
interface IPlanet {
  name: string;
  rotation_period: string;
  diameter: string;
  population: string;
}

interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  passengers: string;
}

interface IColumns {
  key: string;
  label: string;
}

export type { IAppPage, IPeople, IPlanet, IStarship, IColumns };
