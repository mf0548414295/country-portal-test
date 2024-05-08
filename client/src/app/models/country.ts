export interface Country {
  _id:string;
  name: {
    common: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
