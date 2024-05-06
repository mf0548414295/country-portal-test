export interface Country {
  _id:string;
  name: {
    common: string;
  };
  independent: boolean;
  status: string;
  unMember: boolean;
  capital: string;
  region: string;
  subregion: string;
  languages: {
    ron: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  startOfWeek: string;
}
