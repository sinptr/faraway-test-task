export interface PersonResponse {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  url: string;
}

export interface PeopleListResponse {
  count: number;
  results: PersonResponse[];
}

export interface PeopleList extends PeopleListResponse {
  pages: number;
  results: Person[];
}

export interface Person extends PersonResponse {
  id: string;
  image: string;
}
