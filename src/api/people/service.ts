import {
  PeopleList,
  PeopleListResponse,
  Person,
  PersonResponse,
} from "@/api/people/model";
import { notFound } from "next/navigation";

export class PeopleService {
  // Hardcoded because there is no way to get it from API response
  private readonly limit = 10;
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private extractId(personURL: string): Person["id"] {
    const chunks = personURL.split("/");

    return chunks[chunks.length - 2];
  }

  private getImagePath(id: Person["id"]) {
    return `/people/${id}.jpeg`;
  }

  async getById(id: Person["id"]): Promise<Person> {
    const response = await fetch(this.baseURL.concat(id));

    if (response.status === 404) {
      notFound();
    }

    const json: PersonResponse = await response.json();

    return {
      ...json,
      id,
      image: this.getImagePath(id),
    };
  }

  async getList(options?: {
    page?: string;
    search?: Person["name"];
  }): Promise<PeopleList> {
    const params = new URLSearchParams(options);

    const response = await fetch(this.baseURL.concat("?", params.toString()));

    if (response.status === 404) {
      notFound();
    }

    const json: PeopleListResponse = await response.json();

    return {
      ...json,
      pages: Math.ceil(json.count / this.limit),
      results: json.results.map<Person>((person) => {
        const id = this.extractId(person.url);

        return {
          ...person,
          id,
          image: this.getImagePath(id),
        };
      }),
    };
  }
}

// Could've put url to env variable but in this case it's unnecessary
export const peopleService = new PeopleService("https://swapi.dev/api/people/");
