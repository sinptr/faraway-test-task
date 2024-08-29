import { Person } from "@/api/people/model";

export type PersonEditableFields = Pick<
  Person,
  | "birth_year"
  | "gender"
  | "mass"
  | "skin_color"
  | "eye_color"
  | "hair_color"
  | "height"
>;
