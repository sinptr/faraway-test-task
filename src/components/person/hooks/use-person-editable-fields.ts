import { useEffect, useState } from "react";
import { Person } from "@/api/people/model";
import { PersonEditDialogProps } from "@/components/person/person-edit-dialog";
import { PersonEditableFields } from "@/components/person/types";

const config: {
  label: string;
  name: keyof PersonEditableFields;
  type: "string" | "number";
}[] = [
  { label: "Birth Year", name: "birth_year", type: "string" },
  { label: "Gender", name: "gender", type: "string" },
  { label: "Height (cm)", name: "height", type: "number" },
  { label: "Mass (kg)", name: "mass", type: "number" },
  { label: "Hair Color", name: "hair_color", type: "string" },
  { label: "Eye Color", name: "eye_color", type: "string" },
  { label: "Skin Color", name: "skin_color", type: "string" },
];

export function usePersonEditableFields(person: Person) {
  const [localState, setLocalState] = useState<PersonEditableFields>();

  const key = `/person/${person.id}`;

  const fields: PersonEditDialogProps["fields"] = config.map((field) => ({
    ...field,
    value: localState?.[field.name] || person[field.name],
  }));

  const update = (data: PersonEditableFields) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      console.error("Failed to save local state");
    }
    setLocalState(data);
  };

  useEffect(() => {
    try {
      const data = localStorage.getItem(key);

      if (data) {
        const parsed: PersonEditableFields = JSON.parse(data);
        setLocalState(parsed);
      }
    } catch {
      console.error("Failed to get local state");
    }
  }, [key]);

  return [fields, update] as const;
}
